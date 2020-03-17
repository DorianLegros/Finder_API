const db = require("./../db");

exports.get_all_schools = (req, res, next) => {
    db.query('SELECT * from schools', function (error, results, fields) {
        if (error) {
            res.status(500).send({status: "500", message: "Something went wrong, please verify if you're sending a valid request"});
        }
        else if (results.length === 0) {
            res.status(404).send({status: "404", message: "Nothing found in the database"});
        } else {
            res.status(200).send(results);
        }
    });
};