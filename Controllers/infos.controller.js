const db = require("./../db");

exports.get_all_infos = (req, res, next) => {
    db.query('SELECT * from infos', function (error, results, fields) {
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

exports.create_info = (req, res, next) => {
    db.query('INSERT INTO infos (name, surname, age, telephone, email, last_diploma) VALUES ("' + req.body.name + '", ' +
        '"' + req.body.surname + '", "' + req.body.age + '",' +
        '"' + req.body.telephone + '", "' + req.body.email + '", "' + req.body.last_diploma + '")', function (error) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
        }
        else {
            res.status(201).send({status: 201, message: "Info created"})
        }
    })
};

exports.delete_info = (req, res, next) => {
    db.query('SELECT * from infos WHERE id = ' + req.params.id, function (error, results, fields) {
        if (results.length === 0) {
            res.status(404).send({status: 404, messages: "No info found in the database for this ID, delete failed"});
        } else {
            db.query('DELETE FROM infos WHERE id = ' + req.params.id, function (error, results, fields) {
                if (error) {
                    res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
                } else {
                    res.status(200).send({status: 200, message: "Info deleted"});
                }
            })
        }
    })
};