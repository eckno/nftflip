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
        if(!empty(req.getUser))
        {
            return req.getUser;
        }
        else
        {
            return false;
        }
    }
}


///
module.exports = indexController;