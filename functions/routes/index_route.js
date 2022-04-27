const express = require("express");
const router = express.Router();
const {LANDING_PAGE, LOGIN, REGISTERATION, EMAIL} = require("../lib/index-routes");


//
router.get(LANDING_PAGE, async (req, res) => {
    res.render("index", {title: 'home page'});
});

router.get(LOGIN, async (req, res) => {
    res.render("home/login", {title: 'Secure Login'});
});

router.get(REGISTERATION, async (req, res) => {
    res.render("home/register", {title: 'User account setup'});
});

router.get(EMAIL, async(req, res) => {
    res.render("email", { title: 'email' });
});


module.exports = router;