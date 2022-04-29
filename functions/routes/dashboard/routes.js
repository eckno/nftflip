const express = require("express");
const routes = express.Router();





//
routes.get("/", async (req, res) => {
    //
    res.render("dashboard/index");
});

routes.get("/bids", async (req, res) => {
    res.render("dashboard/bids");
})





module.exports = routes;