const express = require("express");
const router = express.Router();
const {DASHBOARD, WALLET, BIDS, PROFILE, SETTINGS, ADD_FUNDS} = require("../lib/user-routes");
const {LANDING_PAGE, LOGIN, REGISTERATION, VERIFICATION, NFT_DETAILS} = require("../lib/index-routes");
const indexController = require("../controller/index");
const controller = new indexController();
const verifyUser = require("../middleware/verification");
const check_nft_id = require("../middleware/has_id");
const User = require("../middleware/User");


router.get(LANDING_PAGE, async (req, res) => {
    return controller.landing(req, res);
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
    //
});

router.post(VERIFICATION, async (req, res) => {
    return controller.accountConfirmation(req, res);
});

router.get(NFT_DETAILS, check_nft_id, async (req, res) => {
    return controller.bidDetails(req, res);
});

/////////////////////////DASHBOARD

router.get(DASHBOARD, User, async (req, res) => {
    //
    return controller.dashboard(req, res);
    
});

router.get(WALLET, User, async (req, res) => {
    //
    return controller.wallet(req, res);
    
});

router.get(BIDS, User, async (req, res) => {
    //
    return controller.bids(req, res);
    
});

router.get(PROFILE, User, async (req, res) => {
    //
    return controller.profile(req, res);
    
});

router.get(SETTINGS, User, async (req, res) => {
    //
    return controller.settings(req, res);
    
});

router.post(SETTINGS, User, async (req, res) => {
    //
    return controller.settings(req, res);
    
});

router.get(ADD_FUNDS, User, async (req, res) => {
    //
    return controller.addFunds(req, res);
    
});

router.post(ADD_FUNDS, User, async (req, res) => {
    //
    return controller.addFunds(req, res);
    
});


module.exports = router;