const express = require("express");
const router = express.Router();
const {LANDING_PAGE, LOGIN, REGISTERATION, EMAIL} = require("../lib/index-routes");
const indexController = require("../controller/index");
const controller = new indexController();


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

router.post(LOGIN, async (req, res) => {
    return controller.loginController(req, res);
});


module.exports = router;