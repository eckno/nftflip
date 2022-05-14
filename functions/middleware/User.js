//
const {empty} = require("../lib/utils/utils");
const {LocalStorage} = require("node-localstorage");
const jwt = require("jsonwebtoken");
const { ROUTE_LOGIN } = require("../lib/index-routes");
const {KEYLOGGER} = require("../lib/constants");

//
const authUser = async (req, res, next) => {
    //
    try{
        const localStorage = new LocalStorage("./token");
        const token = localStorage.getItem("Token");
        //
        
        if(token && !empty(token)){
        //
            const verify = await jwt.verify(token, KEYLOGGER);
            //
            if(!empty(verify) && !empty(verify['uid'])){
                req.getUser = verify;
                //
                next();
            }
            else
            {
                res.redirect("/login");
            }

        }
        else
        {
            res.redirect("/login");
        }
    }
    catch(e){
        res.redirect("/login");
    }
}

//
module.exports = authUser;