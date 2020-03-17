const Express = require("express");
const MySql = require("mysql");
const Cors = require("cors");
const BodyParser = require("body-parser");


const app = Express();
app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());

app.use(function (res, req, next) {
    res.locals.connectionMySql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'finder'
    });
    res.locals.connection.connect()
        .then(() => console.log("Connection à la base de données réussie."))
        .catch(err => console.log(err));
    next();
});

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

module.exports = app;