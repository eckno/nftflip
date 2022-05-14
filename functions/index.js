const functions = require("firebase-functions");
const liquidjs = require("liquidjs");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const indexRout = require("./routes/index_route");
const session = require("express-session");
const {KEYLOGGER} = require("./lib/constants");

const app = express();
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

//set session
// app.use(session({
//     secret: KEYLOGGER,
//     resave: true,
//     saveUninitialized: true
// }));
//
const engine = new liquidjs.Liquid();
//Dependecies
app.engine("liquid", engine.express());
app.set('view engine', 'liquid');
//
app.use(indexRout, require("./routes/index_route"));

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest((app));