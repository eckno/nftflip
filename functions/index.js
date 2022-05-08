const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const liquidjs = require("liquidjs");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const indexRout = require("./routes/index_route");
const flash = require('connect-flash');
const passport = require("passport");
const session = require("express-session");
const {KEYLOGGER} = require("./lib/constants");

const app = express();
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

//set session
app.use(session({
    secret: KEYLOGGER,
    resave: true,
    saveUninitialized: true
}));
//
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())
//Set global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
})
//
const engine = new liquidjs.Liquid();
//Dependecies
app.engine("liquid", engine.express());
app.set('view engine', 'liquid');
//
app.use(indexRout, require("./routes/index_route"));
app.use("/dashboard", require("./routes/dashboard/routes"));
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest((app));