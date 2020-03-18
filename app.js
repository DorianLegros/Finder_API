const Express = require("express");
const MySql = require("mysql");
const Cors = require("cors");
const BodyParser = require("body-parser");


const app = Express();
app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

app.use(Cors());

// avoid CORS policy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/cards', require("./Routes/cards.route.js"));
app.use('/formations', require("./Routes/formations.route.js"));
app.use('/schools', require("./Routes/schools.route.js"));
app.use('/infos', require("./Routes/infos.route"));
app.use('/admin', require("./Routes/admin.route"));

app.use((req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;