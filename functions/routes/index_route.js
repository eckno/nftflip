const express = require("express");
const router = express.Router();
const {LANDING_PAGE, LOGIN, REGISTERATION, VERIFICATION} = require("../lib/index-routes");
const indexController = require("../controller/index");
const controller = new indexController();
const verifyUser = require("../middleware/verification");


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

router.get(VERIFICATION, verifyUser, async (req, res) => {
    return controller.accountConfirmation(req, res);
});


////////////////\\\\\\\\\\\\/////////
router.post(REGISTERATION, async (req, res) => {
    return controller.registerController(req, res);
});

router.post(LOGIN, async (req, res) => {
    return controller.loginController(req, res);
});

router.post(VERIFICATION, async (req, res) => {
    return controller.accountConfirmation(req, res);
});

module.exports = router;