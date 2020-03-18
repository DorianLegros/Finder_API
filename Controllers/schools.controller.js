const db = require("./../db");

exports.get_all_schools = (req, res, next) => {
    db.query('SELECT * from schools', function (error, results, fields) {
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

exports.get_one_school = (req, res, next) => {
    db.query('SELECT * from schools WHERE id = ' + req.params.id, function (error, results, fields) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
        }
        else if (results.length === 0) {
            res.status(404).send({status: 404, messages: "No school found in the database for this ID"});
        } else {
            res.status(200).send(results);
        }
    })
};

exports.create_school = (req, res, next) => {
    db.query('INSERT INTO schools (name) VALUES ("' + req.body.name + '")', function (error) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
        }
        else {
            res.status(201).send({status: 201, message: "School created"})
        }
    })
};

exports.put_school = (req, res, next) => {
    var today = new Date();
    var datetime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    db.query('SELECT * FROM schools WHERE id = ' + req.params.id, function (error, results, fields) {
        if (results.length === 0) {
            res.status(404).send({status: 404, messages: "No school found in the database for this ID, update failed"});
        } else {
            db.query("UPDATE schools SET name = '" + req.body.name + "'," +
                "updated_at = '" + datetime + "' WHERE id = " + req.params.id, function (error)
            {
                if (error) {
                    res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
                }
                else {
                    res.status(201).send({status: 201, message: "School updated"})
                }
            });
        }
    });
};