const {empty} = require("../lib/utils/utils");

//
const hasId = async (req, res, next) => {
    //
    try{
        if(req.query && !empty(req.query.id)){
            //
            next()
        }
        else{
            res.redirect("/login");
        }
    }
    catch(e){
        res.redirect("/");
    }
}

//
module.exports = hasId;