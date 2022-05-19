const {empty} = require("../lib/utils/utils");
const jwt = require("jsonwebtoken");
const {KEYLOGGER} = require("../lib/constants");

//
const authUser = async (req, res, next) => {
    //
    if(req.query && !empty(req.query.token)){
        //
        try{
            const tokenResult = await jwt.verify(req.query.token, KEYLOGGER);
            
            if(!empty(tokenResult) && !empty(tokenResult['uid'])){

                req.getUser = tokenResult;
                //
                next();
            }
            else{
                res.redirect("/login");
             }
        }
        catch(e){
            res.redirect("/login");
        }
        
    }
    else{
        res.redirect("/login");
    }
}

//
module.exports = authUser;