const MySql = require("mysql");

var connection = MySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'finder'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;