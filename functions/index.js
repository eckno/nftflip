const functions = require("firebase-functions");
const liquidjs = require("liquidjs");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const indexRout = require("./routes/index_route");
const session = require("express-session");
const RedisStore = require('connect-redis')(session);
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);
const {KEYLOGGER} = require("./lib/constants");

const app = express();
//store: new RedisStore({ client: redis }),
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({
	secret: KEYLOGGER,
	cookie: { maxAge: 30000 },
	resave: false,
	saveUninitialized: false
}));

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