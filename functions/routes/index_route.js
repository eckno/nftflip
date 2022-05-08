const express = require("express");
const router = express.Router();
const {DASHBOARD} = require("../lib/user-routes");
const {LANDING_PAGE, LOGIN, REGISTERATION, VERIFICATION} = require("../lib/index-routes");
const indexController = require("../controller/index");
const controller = new indexController();
const verifyUser = require("../middleware/verification");
const passport = require("passport");


router.get(LANDING_PAGE, async (req, res) => {
    res.render("index", {title: 'Home Page'});
});

router.get(LOGIN, async (req, res) => {
   return controller.loginController(req, res);
});

router.get(REGISTERATION, async (req, res) => {
    return controller.registerController(req, res);
});

router.get(VERIFICATION, verifyUser, async (req, res) => {
    return controller.accountConfirmation(req, res);
});


router.post(REGISTERATION, async (req, res) => {
    return controller.registerController(req, res);
});

router.post(LOGIN, async (req, res, next) => {
    return controller.loginController(req, res, next);
    // passport.authenticate("local", (error, user, info) => {
    //     if(error) {
    //         const data = {success: false, msg: error}
    //         return res.status(500).json(data);
    //     }
    //     if(!user) {
    //         const data = {success: false, msg: info.message}
    //         return res.status(401).json(data);
    //     }
    //     console.log("UserItem ", user);
    //     req.logIn(user, function(err) {
    //         if (err) { return next(err); }
    //         const data = {success: true, data: user, redirectURL: "/dashboard"}
    //         return res.json(data);
    //         //return res.redirect('/users/' + user.username);
    //       });
        
    // })(req, res, next);
    //

});

router.post(VERIFICATION, async (req, res) => {
    return controller.accountConfirmation(req, res);
});

module.exports = router;