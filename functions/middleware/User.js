//
const {empty} = require("../lib/utils/utils");
const {LocalStorage} = require("node-localstorage");
const jwt = require("jsonwebtoken");
const { ROUTE_LOGIN } = require("../lib/index-routes");
const {KEYLOGGER} = require("../lib/constants");

//
const authUser = async (req, res, next) => {
    //
    const localStorage = new LocalStorage("./token");
    const token = localStorage.getItem("Token");
    //
   
    if(token && !empty(token)){
    //
        const verify = await jwt.verify(token, KEYLOGGER);
        //
        console.log("verify ", verify);
        if(!empty(verify) && verify['loggedin'] === true){
            req.getUser = verify;
            //
            next();
        }
        else
        {
            res.redirect(ROUTE_LOGIN);
        }

    }
    else
    {
        res.redirect(ROUTE_LOGIN);
    }
}

//
module.exports = authUser;