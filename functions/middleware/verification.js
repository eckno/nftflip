const {LANDING_PAGE, LOGIN} = require("../lib/index-routes");
const {empty, isString} = require("../lib/utils/utils");
const IndexController = require("../controller/index");

const verifyUser = async (req, res, next) => {
    try{
        if(!empty(req.query) && !empty(req.query.token) && isString(req.query.token)){
            //
            const verifyer = new IndexController();
            const result = await verifyer.verifyUser(req.query.token);
            //
            if(result === false){
                return res.redirect(LOGIN);
            }else{
                result.forEach(doc => {
                    req.userData = doc.data();
                });
            }
            if(req.userData.emailValidated === true){
                return res.redirect(LOGIN);
            }
            next();
        }
        else{
            return res.redirect(LOGIN);
        }
    }
    catch (e) {
        return res.redirect(LANDING_PAGE);
    }
}

module.exports = verifyUser;