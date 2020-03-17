const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");


const app = Express();
app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

module.exports = app;