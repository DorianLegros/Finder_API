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

exports.create_formation = (req, res, next) => {
    db.query('INSERT INTO formations (name, school) VALUES ("' + req.body.name + '", "' + req.body.id_school +'")', function (error) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
        }
        else {
            res.status(201).send({status: 201, message: "Formation created"})
        }
    })
};

exports.put_formation = (req, res, next) => {
    var today = new Date();
    var datetime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    db.query('SELECT * FROM formations WHERE id = ' + req.params.id, function (error, results, fields) {
        if (results.length === 0) {
            res.status(404).send({status: 404, messages: "No formation found in the database for this ID, update failed"});
        } else {
            db.query("UPDATE formations SET name = '" + req.body.name + "', school = '" + req.body.id_school + "'," +
                "updated_at = '" + datetime + "' WHERE id = " + req.params.id, function (error)
            {
                if (error) {
                    res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
                }
                else {
                    res.status(201).send({status: 201, message: "Formation updated"})
                }
            });
        }
    });
};

exports.delete_formation = (req, res, next) => {
    db.query('SELECT * from formations WHERE id = ' + req.params.id, function (error, results, fields) {
        if (results.length === 0) {
            res.status(404).send({status: 404, messages: "No formation found in the database for this ID, delete failed"});
        } else {
            db.query('DELETE FROM formations WHERE id = ' + req.params.id, function (error, results, fields) {
                if (error) {
                    res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
                } else {
                    res.status(200).send({status: 200, message: "Formation deleted"});
                }
            })
        }
    })
};