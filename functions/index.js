const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const liquidjs = require("liquidjs");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const indexRout = require("./routes/index_route");

const app = express();
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

//
const engine = new liquidjs.Liquid();
//Dependecies
app.engine("liquid", engine.express());
app.set('view engine', 'liquid');
//
app.use(indexRout, require("./routes/index_route"));
app.use(indexRout, require("./routes/index_route"));
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.app = functions.https.onRequest((app));