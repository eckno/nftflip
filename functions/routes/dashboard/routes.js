const express = require("express");
const routes = express.Router();
const User = require("../../middleware/User");
const { ensureAuthenticated } = require("../../config/auth");
const indexController = require("../../controller/index");
const controller = new indexController();



//
routes.get("/", User, async (req, res) => {
    //
    return controller.dashboard(req, res);
});

routes.get("/bids", async (req, res) => {
    res.render("dashboard/bids");
});

routes.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.log(err);
        }
        res.redirect("/login")
    });
});





module.exports = routes;