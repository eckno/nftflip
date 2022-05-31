const functions = require("firebase-functions");
const baseController = require("./base");
const admin = require("firebase-admin");
const { v4: uuidv4 } = require('uuid');
const _ = require('lodash');
const {empty, filter_var, isString} = require("../lib/utils/utils");
const emailTemp = require("../lib/email-temps");
const jwt = require('jsonwebtoken');
const {KEYLOGGER} = require("../lib/constants");
const isbase = new baseController();
const serviceAccount = require("../lib/nftflip-fd13a-firebase-adminsdk-c4o7r-aff5fe5465.json");


//nftflip@nftflip.iam.gserviceaccount.com
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

class indexController extends baseController
{
    constructor()
    {
        super();
    }
    //
    async landing(req, res)
    {
        let nft_list = {};
        const nfts = await db.collection("nfts").get();
        nft_list = nfts.docs.map(doc => doc.data());

        const getCurrentBid = await db.collection("currentBid").doc("fccb62fa-5f35-4507-8ee5-83fcd78595c7").get();

        return res.render("index", {
            title: 'Welcome to NFTFLIP TRADE || No.1 NFT Bidding platform',
            bid: getCurrentBid.data(),
            nfts: nft_list
        });
    }

    async loginController(req, res){
        //
        if(req.method === "POST"){
            
            const post = baseController.sanitizeRequestData(req.body);
            //
            if(!filter_var(_.trim(post["email"]), "FILTER_VALIDATE_EMAIL") || !isString(post["email"])){
                return baseController.sendFailResponse(res, "Invalid email address!!");
            }
            //
            const user  = await auth.getUserByEmail(post['email']).then((user) => {
                if(user){
                    return user;
                }
                else{
                    return "There is no user record corresponding to the provided identifier."
                }
            }).catch(() => {
                return "There is no user record corresponding to the provided identifier."
            });
            if(user.email && user.email != ""){
                //
                const userData = await db.collection("members").doc(user.uid).get();
                //
                if(!userData.exists){
                    return baseController.sendFailResponse(res, "Error: User data not found, please contact support");
                }
                //
                if(userData.data().auth != post['password']){
                    return baseController.sendFailResponse(res, "Incorrect email address or password!!");
                }else
                if(userData.data().emailValidated === false){
                    console.log(typeof(userData.data().email));
                    isbase.send_email("NFTLIP TRADE account validation", userData.data().email, emailTemp.welcome_mail(userData.data().fname, userData.data().emailValidationToken));
                    return indexController.sendFailResponse(res, "Please check for the verification email sent to you to verify and setup your account.")
                }
                else{
                    const uid = userData.data().uid;
                    const additionalClaim = {
                        uid,
                        role: userData.data().role,
                        email: userData.data().email
                    }
                    //
                    
                    const createdToken = jwt.sign(additionalClaim, KEYLOGGER, { expiresIn: '1h' });
                        if(!empty(createdToken) && isString(createdToken))
                        {
                            // console.log(createdToken);
                            const sessionData = {
                                token: createdToken
                            }
                            baseController.setUserSession(req, sessionData);
                              return baseController.sendSuccessResponse(res, {
                                redirectURL: `/dashboard?token=${createdToken}`,
                                success: true
                            })
                        }
                        else{
                            return baseController.sendFailResponse(res, "Oops! Something went wrong please try again later.");
                        }
                    //
                    
                }
            }
            else
            {
                //
                return baseController.sendFailResponse(res, user);
            }
        }
        else
        {
            try{
                //
                return res.render("home/login", {
                    title: 'Secure Login',
                    footer_scripts: [
                        "js/app/login.js"
                    ]
                });
            }
            catch(e){
                //
                return res.render("index", {title: 'Page Load Back'});
            }
        }
    }

    async registerController(req, res){
        //
        if(req.method === "POST"){
            //
            try{
                const post = baseController.sanitizeRequestData(req.body);
                if(empty(post)){
                    return baseController.sendFailResponse(res, "");
                }
                //
                if(!filter_var(_.trim(post["email"]), "FILTER_VALIDATE_EMAIL") || !isString(post["email"])){
                    return baseController.sendFailResponse(res, "Invalid email address!!");
                }
                //
                const userCredentials = {
                    uid: uuidv4(),
                    email: post['email'],
                    fname: post['name'],
                    username: post['uname'],
                    phone: post['phone'],
                    auth: post['password'],
                    refid: post['refid'],
                    emailValidationToken: uuidv4(),
                    emailValidated: false,
                    currentBid: 0,
                    runningValue: 0,
                    totalBalance: 0,
                    totalDeposit: 0,
                    refbonus: 0,
                    totalBid: 0,
                    last_month_inc: 0,
                    currentDep: 0,
                    regOn: Date()
                }
                const isuser = await auth.createUser({
                    uid: userCredentials.uid,
                    email: userCredentials.email,
                    phoneNumber: userCredentials.phone
                }).then((user) => {
                    db.collection("members").doc(user.uid).set(userCredentials);
                    //
                    return user;
                })
                .catch((err) => {
                    return err;
                });
                ///
                if(!empty(isuser) && !empty(isuser.uid)){
                    //
                    const base = new baseController();
                    base.send_email("Welcome To Nftflip Trade", userCredentials.email, emailTemp.welcome_mail(userCredentials.fname, isuser.emailValidationToken));
                    return baseController.sendSuccessResponse(res, isuser);
                }
                else
                {
                    return baseController.sendFailResponse(res, isuser['message']);
                }
            }
            catch (err){
                //
                return baseController.sendFailResponse(res, "Oops! Something went wrong, kindly try again or contact admin for assistance.");
            }
            
        }
        else
        {
            try{
                //
                return res.render("home/register", {
                    title: 'User account setup',
                    footer_scripts: [
                        "js/app/reg.js"
                    ]
                });
            }
            catch(e){
                //
                return res.render("index", {title: 'Page Load Back'});
            }
        }
    }

    async accountConfirmation(req, res)
    {
        if(req.method == "POST"){
            const post = baseController.sanitizeRequestData(req.body);
            if(!empty(post['pin']) && !empty(post['uid'])){
                //
                const result = await db.collection("members").doc(post['uid']).update({
                    emailValidated: true,
                    accountPin: post['pin']
                }).catch((e) => {return false;});
                //
                if(!empty(result) && result !== false){
                    return baseController.sendSuccessResponse(res, result);
                }
                return baseController.sendFailResponse(res, "Account confirmation failed. Please contact support. 1");
            }
            else
            {
                return baseController.sendFailResponse(res, "Account confirmation failed. Please contact support. 2");
            }
        }else{
            res.render("home/verify", {
                title: "Verify Account",
                footer_scripts: [
                    "js/app/confirm.js"
                ],
                uid: req.userData.uid
            });
        }
    }

    async verifyUser(token)
    {
        const checkUser = await db.collection("members").where("emailValidationToken", "==", token).get()
        .then((docs) => {
            return docs;
        })
        .catch((e) => {
            return false;
        });
        
        if(checkUser.empty){
            return false;
        }
        else {
            return checkUser;
        }
    }

    async tokenValidator(token){
        const result = await auth.verifyIdToken(token);
        return result;
    }

    async bidDetails(req, res)
    {
        let nft_details = {};
        const nfts = await db.collection("nfts").where("nftid", "==", req.query.id).get();
        
        if(nfts.empty == true){
            return res.redirect("/");
        }
        
        nft_details = nfts.docs.map(doc => doc.data());
        
        return res.render("home/details", {
            title: `${nft_details[0].name} || No.1 NFT Bidding platform`,
            nfts: nft_details,
            randomint: 234
        });
    }

    async dashboard(req, res)
    {
        const Users = await db.collection("members").doc(req.getUser.uid).get();
        //
        let nft_list = {};
        const nfts = await db.collection("nfts").get();
        nft_list = nfts.docs.map(doc => doc.data());

        return res.render("dashboard/home", {
            title: `Biders Dashboard | ${Users.data().fname}`,
            token: req.query.token,
            footer_scripts: [
                "/js/app/dashboard/index.js"
            ],
            loggedUser: Users.data(),
            nfts: nft_list
        });
        
    }

    // async wallet(req, res)
    // {
    //     const Users = await db.collection("members").doc(req.getUser.uid).get();

    //     let history_list = {};
    //     const histories = await db.collection("history").where("user", "==", req.query.id).get();
    //     //return console.log(histories.empty);
    //     if(histories.empty == true){
    //         history_list = false;
    //     }else{
    //         history_list = histories.docs.map(doc => doc.data());
    //     }

    //     return res.render("dashboard/wallet", {
    //         title: `Wallet Balance | ${Users.data().fname}`,
    //         token: req.query.token,
    //         histories: history_list,
    //         loggedUser: Users.data()
    //     });
        
    // }

    async bids(req, res)
    {
        if(req.method === "POST"){
            const post = baseController.sanitizeRequestData(req.body);
            if(empty(post) || empty(post['id'])){
                return baseController.sendFailResponse(res, {
                    success: false,
                    msg: "Something went wrong, please contact your account admin."
                })
            }
            const Users = await db.collection("members").doc(req.getUser.uid).get();
            if(!empty(Users.data()) && !empty(Users.data().uid)){
                const getBid = await db.collection("bids").doc(post['id']).get();
                //
                if(!empty(getBid.data())){
                    var tb = parseFloat(Users.data().totalBalance) + parseFloat(getBid.data().profitexp);
                    var tp = parseFloat(Users.data().last_month_inc) + parseFloat(getBid.data().profitexp);

                    const updateUser = {
                        totalBalance: tb.toFixed(2),
                        last_month_inc:  tp.toFixed(2),
                    }

                    const updateBid = {
                        iscompleted: "yes",
                        status: "flipped"
                    }

                    const saveBid = await db.collection("bids").doc(post['id']).update(updateBid);
                    //
                    if(saveBid){

                        const saveUser = await db.collection("members").doc(Users.data().uid).update(updateUser); 

                        if(saveUser){
                            return baseController.sendSuccessResponse(res, {
                                success: true,
                                msg: "Success: Your bid have been flipped successfully",
                                redirectURL: `/wallet?token=${req.query.token}`
                            })
                        }
                    }
                }
            }
            
        }
        const Users = await db.collection("members").doc(req.getUser.uid).get();
        //
        let bid_list = {};
        const bids = await db.collection("bids").where("uid", "==", req.getUser.uid).get();
        //return console.log(histories.empty);
        if(bids.empty == true){
            bid_list = false;
        }else{
            bid_list = bids.docs.map(doc => doc.data());
        }

        return res.render("dashboard/bids", {
            title: `Wallet Balance | ${Users.data().fname}`,
            token: req.query.token,
            bids: bid_list,
            footer_scripts: [
                "/js/app/dashboard/bids.js"
            ],
            loggedUser: Users.data()
        });
        
    }

    async profile(req, res)
    {
        const Users = await db.collection("members").doc(req.getUser.uid).get();
        //
        let bid_list = {};
        const bids = await db.collection("bids").where("uid", "==", req.getUser.uid).get();
        //return console.log(histories.empty);
        if(bids.empty == true){
            bid_list = false;
        }else{
            bid_list = bids.docs.map(doc => doc.data());
        }

        return res.render("dashboard/profile", {
            title: `User Profile | ${Users.data().fname}`,
            bids: bid_list,
            token: req.query.token,
            loggedUser: Users.data()
        });
        
    }

    async settings(req, res)
    {
        if(req.method == "POST"){
            //
            const post = baseController.sanitizeRequestData(req.body);

            const data_update = {
                username: post['username'],
                address: post['address'],
                city: post['city'],
                pcode: post['postal'],
                country: post['country']
            }
            
            const result = await db.collection("members").doc(req.getUser.uid).update(data_update);
            console.log(result);
            if(result){
                //
                baseController.sendSuccessResponse(res, {
                    success: true
                })
            }
        }
        else
        {
        const Users = await db.collection("members").doc(req.getUser.uid).get();
        //

        return res.render("dashboard/settings", {
            title: `Profile Settings | ${Users.data().fname}`,
            token: req.query.token,
            footer_scripts: [
                "js/app/dashboard/settings.js"
            ],
            loggedUser: Users.data()
        });
        }
        
    }

    async addFunds(req, res)
    {
        try{
            if(req.method === "POST"){
                const post = baseController.sanitizeRequestData(req.body);
    
                if(empty(post['amount'])){
                    return baseController.sendFailResponse(res, {
                        success: false,
                        msg: "Oops! kindly enter a valid amount for deposit"
                    })
                }else if(post['amount'] < 0.5){
                    return baseController.sendFailResponse(res, {
                        success: false,
                        msg: "You can only deposit a minimum of 0.5ETH"
                    })
                }
                //return console.log(req.getUser.uid);
                const Users = await db.collection("members").doc(req.getUser.uid).get();
                //
                //return console.log(Users.data().fname);
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
                const d = new Date();
                let month = months[d.getMonth()];
                const invoidId = uuidv4();
                //
                const invID = Math.floor(Math.random() * (200 - 10) + 10);
                  //
                const data_to_send = {
                    clientName: Users.data().fname,
                    docid: invoidId,
                    uid: req.getUser.uid,
                    amount: post['amount'],
                    desc: post['desc'],
                    status: "pending",
                    currency: "ETH",
                    invoice_id: invID,
                    date: month + ' ' + d.getDate() + ' ' + d.getFullYear(),
                    tax: 0.01
                }
    
                const result = await db.collection("deposits").doc(invoidId).set(data_to_send);
                
                if(result){
                    const emailMsg = emailTemp.deposit_email(Users.data().fname, data_to_send.date, data_to_send.invoice_id, `${data_to_send.amount}ETH`, `${data_to_send.tax}ETH`, `${data_to_send.amount}ETH`);
                    const base = new baseController();
                    base.send_email("You have initiated a new deposit", Users.data().email, emailMsg);
                    //
                    const historyId = invoidId;
    
                    const history = {
                        id: historyId,
                        category: "Transaction",
                        type: "Deposit",
                        user: req.getUser.uid,
                        amount: post['amount'],
                        msg: "You initiated a deposit",
                        invoiceid: invoidId,
                        status: "Pending"
    
                    }
                    await db.collection('history').doc(historyId).set(history);
                    return baseController.sendSuccessResponse(res, {
                        success: true,
                        redirectURL: `/deposit_details?token=${req.query.token}&invoice=${invoidId}`,
                    })
                }
    
                return baseController.sendFailResponse(res, {
                    success: false,
                    msg: "Oops! something went wrong, please contact support for assistance"
                })
            }
            else
            {
                const Users = await db.collection("members").doc(req.getUser.uid).get();
                //
        
                return res.render("dashboard/addfunds", {
                    title: `Add Payments | ${Users.data().fname}`,
                    token: req.query.token,
                    footer_scripts: [
                        "js/app/dashboard/add_funds.js"
                    ],
                    loggedUser: Users.data()
                });
            }
        }
        catch(e){
            //
            return res.redirect("/login");
        }
        
    }

    async invoice(req, res)
    {
        const invoice = await db.collection("deposits").doc(req.query.invoice).get();
        const getWallet = await db.collection("wallet").doc("59729c37-fbf8-49b2-a080-50676212e157").get();
        //
        if(!invoice.data() || empty(invoice.data().uid))
        {
            res.redirect(`/dashboard?token=${req.query.token}`)
        }
        var result = parseFloat(invoice.data().amount) + parseFloat(invoice.data().tax);
       
        return res.render("dashboard/invoice_p", {
            title: `Payment details | ${invoice.data().clientName}`,
            token: req.query.token,
            gtotal: result.toFixed(2),
            wallet: getWallet.data(),
            loggedUser: invoice.data()
        });
        
    }

    async invoiceWd(req, res)
    {
        const invoice = await db.collection("withdrawals").doc(req.query.invoice).get();
        //
        if(!invoice.data() || empty(invoice.data().uid))
        {
            res.redirect(`/dashboard?token=${req.query.token}`)
        }
        var result = parseFloat(invoice.data().amount) - parseFloat(invoice.data().tax);
       
        return res.render("dashboard/invoice_w", {
            title: `Payment details | ${invoice.data().clientName}`,
            token: req.query.token,
            gtotal: result.toFixed(2),
            loggedUser: invoice.data()
        });
        
    }

    async fetchUser(uid){
        //
        const user = await db.collection("members").doc(uid).get();
        //
        if(user.data() && !empty(user.data().uid)){
            return user.data();
        }else{
            return null;
        }
    }

    async addNft(req, res)
    {
        if(req.method == "POST"){
            //
            const post = baseController.sanitizeRequestData(req.body);
            const bidid = uuidv4();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const d = new Date();
            let month = months[d.getMonth()];
            let countdown="";
            if(post['hascountdown'] == "yes"){
                countdown = true;
            }else{
                countdown = false;
            }
            //
            const dataSender = {
                addedOn: month + ' ' + d.getDate() + ' ' + d.getFullYear(),
                bid: post['bidprice'],
                countdowntime: countdown,
                description: post['desc'],
                duration: post['duration'],
                like: post['like'],
                name: post['nftname'],
                nftUrl: post['nfturl'],
                nftid: bidid,
                profitexp: post['price'],
            }

            //
            const query = await db.collection("nfts").doc(bidid).set(dataSender);

            if(query){
                if(post['iscurrent'] == 'yes'){
                    const query_t = await db.collection("currentBid").doc("fccb62fa-5f35-4507-8ee5-83fcd78595c7").update(dataSender);
                    //
                    return baseController.sendSuccessResponse(res, {
                        success: true,
                        msg: `NFT successfully added to list`,
                    });
                }

                return baseController.sendSuccessResponse(res, {
                    success: true,
                    msg: `NFT successfully added to list`,
                });
            }

            return baseController.sendFailResponse(res, {
                success: false,
                msg: "Oops! something went wrong, please contact support for assistance"
            })
        }
        else
        {
             //const Users = await db.collection("members").doc(req.getUser.uid).get();

        return res.render("admin/add_nft", {
            title: `Add Nft | ${req.admin.fname}`,
            footer_scripts: [
                "js/app/admin/add_nft.js"
            ],
            token: req.query.token,
            loggedUser: req.admin
        });
        }
       
    }

    async setWallet(req, res)
    {
        if(req.method == "POST"){
            //
            const post = baseController.sanitizeRequestData(req.body);
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	        const d = new Date();
	        let month = months[d.getMonth()];

            const data_to_send = {
                addOn: month + ' ' + d.getDate() + ' ' + d.getFullYear(),
                type: "ETH",
                long_name: "Ethereum",
                address: post['wallet']
            }

            const query = await db.collection("wallet").doc("59729c37-fbf8-49b2-a080-50676212e157").update(data_to_send);

            if(query){
                return baseController.sendSuccessResponse(res, {
                    success: true,
                    msg: `Ethereum wallet address updated successfuly`,
                });
            }

            return baseController.sendFailResponse(res, {
                success: false,
                msg: "Oops! something went wrong, please contact support for assistance"
            })
        }
        else
        {
            const getWallet = await db.collection("wallet").doc("59729c37-fbf8-49b2-a080-50676212e157").get();
            //
    
            return res.render("admin/add_wallet", {
                title: `Add Wallet | ${req.admin.fname}`,
                footer_scripts: [
                    "js/app/admin/add_wallet.js"
                ],
                token: req.query.token,
                loggedUser: req.admin,
                wallet: getWallet.data(),
            });
        }
        
    }

    async wallet(req, res)
    {
        if(req.method == "POST"){
            const post = baseController.sanitizeRequestData(req.body);
            
            if(empty(req.body)){
                return baseController.sendFailResponse(res, {msg: "Invalid Request"});
            }

            const Users = await db.collection("members").doc(req.getUser.uid).get();
            const getBalance = parseFloat(Users.data().totalBalance);
            if(Users.data() && !empty(Users.data())){
                if(getBalance < 0.1){
                    return baseController.sendFailResponse(res, {
                        success: false,
                        msg: "You can't make withdrawal at this time. <br> You either have low or zero balance"
                    })
                }

                return baseController.sendSuccessResponse(res, {
                    success: true
                });
            }
        }
        else
        {
            const Users = await db.collection("members").doc(req.getUser.uid).get();
        //
            let history_list = {};
            
            const histories = await db.collection("history").where("user", "==", req.getUser.uid).get();
            
            if(histories.empty == true){
                history_list = false;
            }else{
                history_list = histories.docs.map(doc => doc.data());
            }

            return res.render("dashboard/wallet", {
                title: `User Profile | ${Users.data().fname}`,
                footer_scripts: [
                    "js/app/dashboard/inside_wallet.js"
                ],
                token: req.query.token,
                histories: history_list,
                loggedUser: Users.data()
            });
        }
        
    }

    async withdraw(req, res)
    {
        if(req.method ==="POST"){
            const post = baseController.sanitizeRequestData(req.body);
            //
            if(!empty(post) && !empty(post['amount']))
            {
                const Users = await db.collection("members").doc(req.getUser.uid).get();
                //
                if(parseFloat(Users.data().totalBalance) < parseFloat(post['amount'])){
                    return baseController.sendFailResponse(res, {
                        success: false,
                        msg: "You have an insufficient funds!!"
                    })
                }

                const invoidId = uuidv4();
                //
                const invID = Math.floor(Math.random() * (200 - 10) + 10);
                  //
                const data_to_send = {
                    clientName: Users.data().fname,
                    docid: invoidId,
                    uid: req.getUser.uid,
                    amount: post['amount'],
                    walletAddress: post['wallet'],
                    desc: post['desc'],
                    status: "pending",
                    currency: "ETH",
                    invoice_id: invID,
                    date: indexController.preffered_date_format(),
                    tax: 1.5
                }

                const newBalance = parseFloat(Users.data().totalBalance) - parseFloat(post['amount']);

                const updateUser = await db.collection("members").doc(Users.data().uid).update({
                    totalBalance: newBalance.toFixed(2)
                });
    
                const result = await db.collection("withdrawals").doc(invoidId).set(data_to_send);
                
                if(result){
                    const emailMsg = emailTemp.withdrawal_email(Users.data().fname, data_to_send.date, data_to_send.invoice_id, data_to_send.amount, data_to_send.tax, data_to_send.walletAddress);
                    const base = new baseController();
                    base.send_email("You have initiated a withdrawal request", Users.data().email, emailMsg);
                    //
                    const historyId = invoidId;
    
                    const history = {
                        id: historyId,
                        category: "Transaction",
                        type: "Withdrawal",
                        user: req.getUser.uid,
                        amount: post['amount'],
                        msg: "You initiated a withdrawal request",
                        invoiceid: invoidId,
                        status: "Pending"
    
                    }
                    await db.collection('history').doc(historyId).set(history);
                    return baseController.sendSuccessResponse(res, {
                        success: true,
                        redirectURL: `/withdraw_details?token=${req.query.token}&invoice=${invoidId}`,
                    })
                }
            }
        }

        const Users = await db.collection("members").doc(req.getUser.uid).get();
        //

        return res.render("dashboard/withdraw", {
            title: `Withdraw Funds | ${Users.data().fname}`,
            token: req.query.token,
            footer_scripts: [
                "js/app/dashboard/place_w.js"
            ],
            loggedUser: Users.data()
        });
        
    }

    async startBid(req, res)
    {
        const Users = await db.collection("members").doc(req.getUser.uid).get();
        //
        if(req.method === "POST"){
            try{
                if(Users.data().totalBalance < 0.5){
                    return baseController.sendFailResponse(res, {
                        success: false,
                        msg: "You don't have enough available balance to place a bid. Kindly fund your account and try again."
                    })
                }else{
                    return baseController.sendSuccessResponse(res, {
                        success: true
                    })
                }
            }
            catch (e){
                return res.redirect(`/dashboard?token=${req.query.token}`);
            }
        }

        if(Users.data().totalBalance < 0.5){
            return res.redirect("/login");
        }
        //
        let nft_details = {};
        const nfts = await db.collection("nfts").where("nftid", "==", req.query.id).get();
        
        if(nfts.empty == true){
            return res.redirect("/");
        }
        
        nft_details = nfts.docs.map(doc => doc.data());

        return res.render("dashboard/start_bid", {
            title: `Biders Dashboard | ${Users.data().fname}`,
            token: req.query.token,
            footer_scripts: [
                "/js/app/dashboard/start_bid.js"
            ],
            nfts: nft_details,
            loggedUser: Users.data()
        });
        
    }

    async submitBid(req, res)
    {
        if(req.method === "POST")
        {
            const post = baseController.sanitizeRequestData(req.body);
            
            if(!empty(post) && !empty(post['bid'])){
                const Users = await db.collection("members").doc(req.getUser.uid).get();
                //
                const getNft = await db.collection("nfts").doc(post['bid']).get();
                
                if(empty(getNft.data()) || empty(getNft.data().nftid)){
                    return baseController.sendFailResponse(res, {
                        success: false,
                        msg: "You can't bid on this NFT at the moment, please check back later"
                    })
                }

                if(parseFloat(post['amount']) < parseFloat(getNft.data().bid)){
                    return baseController.sendFailResponse(res, {
                        success: false,
                        msg: "Your bid amount is lower than the open price for this NFT"
                    })
                }

                if(Users.data().totalBalance < parseFloat(post['amount'])){
                    return baseController.sendFailResponse(res, {
                        success: false,
                        msg: "You don't have enough funds to bid on this NFT, kindly reduce your bid."
                    })
                }

                if(Users.data().totalBalance < parseFloat(getNft.data().bid)){
                    return baseController.sendFailResponse(res, {
                        success: false,
                        msg: "You don't have enough funds to bid on this NFT."
                    })
                }
                //
                const sbid = uuidv4();

                const bidData = {
                    uid: Users.data().uid,
                    bid: sbid,
                    nftName: getNft.data().name,
                    nftId: getNft.data().nftid,
                    startBid: getNft.data().bid,
                    placedBid: post['amount'],
                    profitexp: getNft.data().profitexp,
                    nftUrl: getNft.data().nftUrl,
                    duration: getNft.data().duration,
                    date: indexController.preffered_date_format(),
                    status: "Auctioning",
                    iscompleted: false,
                }

                //
                const updateAccount = await db.collection("members").doc(req.getUser.uid).update({
                    totalBalance: Users.data().totalBalance - parseFloat(post['amount']).toFixed(2),
                    totalBid: Users.data().totalBid + 1,
                    runningValue: Users.data().runningValue + parseFloat(post['amount']).toFixed(2)
                });
                //
                if(updateAccount){
                    const setBid = await db.collection("bids").doc(sbid).set(bidData);
                    //
                    if(setBid){
                        const emailMsg = emailTemp.bid_email(bidData.nftName, bidData.startBid, bidData.placedBid, bidData.profitexp, bidData.status);
                        const base = new baseController();
                        base.send_email("Congrat,You have placed a new bid", Users.data().email, emailMsg);
                        return baseController.sendSuccessResponse(res, {
                            success: true,
                            msg: "Your bid has been successfully placed",
                            redirectURL: `/bids?token=${req.query.token}`
                        })
                    }
                }
            }
        }
        
    }
}


///
module.exports = indexController;