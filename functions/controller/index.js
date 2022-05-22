const functions = require("firebase-functions");
const baseController = require("./base");
const admin = require("firebase-admin");
const { v4: uuidv4 } = require('uuid');
const _ = require('lodash');
const {empty, filter_var, isString} = require("../lib/utils/utils");
const emailTemp = require("../lib/email-temps");
const jwt = require('jsonwebtoken');
const {KEYLOGGER} = require("../lib/constants");
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
        return res.render("index", {
            title: 'Welcome to NFTFLIP TRADE || No.1 NFT Bidding platform',
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
                    baseController.send_email("NFTLIP TRADE account validation", userData.data().email, emailTemp.welcome_mail(userData.data().fname, userData.data().emailValidationToken));
                    return baseController.sendFailResponse(res, "Please check for the verification email sent to you to verify and setup your account.")
                }
                else{
                    const uid = userData.data().uid;
                    const additionalClaim = {
                        uid,
                        role: userData.data().role,
                        email: userData.data().email
                    }
                    //
                    
                    const createdToken = jwt.sign(additionalClaim, KEYLOGGER);
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
            loggedUser: Users.data(),
            nfts: nft_list
        });
        
    }

    async wallet(req, res)
    {
        const Users = await db.collection("members").doc(req.getUser.uid).get();

        return res.render("dashboard/wallet", {
            title: `Wallet Balance | ${Users.data().fname}`,
            token: req.query.token,
            loggedUser: Users.data()
        });
        
    }

    async bids(req, res)
    {
        const Users = await db.collection("members").doc(req.getUser.uid).get();
        //

        return res.render("dashboard/bids", {
            title: `Wallet Balance | ${Users.data().fname}`,
            token: req.query.token,
            loggedUser: Users.data()
        });
        
    }

    async profile(req, res)
    {
        const Users = await db.collection("members").doc(req.getUser.uid).get();
        //

        return res.render("dashboard/profile", {
            title: `User Profile | ${Users.data().fname}`,
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
            //
            const data_to_send = {
                clientName: req.getUser.fname,
                uid: req.getUser.uid,
                amount: post['amount'],
                desc: post['desc'],
                status: "pending",
                currency: "ETH",
                tax: 0.01
            }

            const result = await db.collection("deposits").doc().set(data_to_send);
            if(result){
                return baseController.sendSuccessResponse(res, {
                    success: true,
                    redirectURL: `/deposit_details?token=${req.query.token}`,
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
}


///
module.exports = indexController;