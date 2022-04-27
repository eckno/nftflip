const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const {LANDING_PAGE, LOGIN, REGISTERATION, EMAIL} = require("../lib/index-routes");
=======
const indexController = require("../controller/index");
const {LANDING_PAGE, LOGIN, REGISTERATION} = require("../lib/index-routes");
const controller = new indexController();
>>>>>>> 7935a1a5747560c05532765c404c2b11663bb2fb


//
router.get(LANDING_PAGE, async (req, res) => {
    res.render("index", {title: 'home page'});
});

router.get(LOGIN, async (req, res) => {
    return controller.loginController(req, res);
});

router.get(REGISTERATION, async (req, res) => {
    return controller.registerController(req, res);
});


////////////////\\\\\\\\\\\\/////////
router.post(REGISTERATION, async (req, res) => {
    return controller.registerController(req, res);
});

router.get(EMAIL, async(req, res) => {
    res.render("email", { title: 'email' });
});


module.exports = router;