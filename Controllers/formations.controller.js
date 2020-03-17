const db = require("./../db");

exports.get_all_formations = (req, res, next) => {
    db.query('SELECT * from formations', function (error, results, fields) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
        }
        else if (results.length === 0) {
            res.status(404).send({status: 404, message: "Nothing found in the database"});
        } else {
            res.status(200).send(results);
        }
    });
};

exports.get_one_formation = (req, res, next) => {
    db.query('SELECT * from formations WHERE id = ' + req.params.id, function (error, results, fields) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
        }
        else if (results.length === 0) {
            res.status(404).send({status: 404, messages: "No formation found in the database for this ID"});
        } else {
            res.status(200).send(results);
        }
    })
};

exports.get_some_formations = (req, res, next) => {
    db.query('SELECT * from formations WHERE school = ' + req.params.idSchool, function (error, results, fields) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"})
        }
        else if (results.length === 0) {
            res.status(404).send({status: 404, message: "No formation found in the database for this school ID"});
        } else {
            res.status(200).send(results);
        }
    })
};