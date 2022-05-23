const {empty} = require("../lib/utils/utils");
const Controller = require("../controller/index");

//
const authUser = async (req, res, next) => {
    //
    try{
        if(req.getUser && !empty(req.getUser['uid'])){
            //
            const controller = new Controller();

                const getUser = await controller.fetchUser(req.getUser['uid']);
                
                if(!empty(getUser) && !empty(getUser['uid'])){
    
                    if(getUser['role'] === 1 || getUser['role'] === 2){
                        //
                        req.admin = getUser;
                        next();
                    }
                   else{
                       res.redirect("/404");
                   }
                }
                else{
                    res.redirect("/404");
                 }
            
            
        }
        else{
            res.redirect("/404");
        }
    }
    catch(e){
        //
        res.redirect("/404");
    }
    
}

//
module.exports = authUser;