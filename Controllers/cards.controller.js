const db = require("./../db");

exports.get_all_cards = (req, res, next) => {
    db.query('SELECT * from cards', function (error, results, fields) {
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

exports.get_one_card = (req, res, next) => {
    db.query('SELECT * from cards WHERE id = ' + req.params.id, function (error, results, fields) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
        }
        else if (results.length === 0) {
            res.status(404).send({status: 404, messages: "No card found in the database for this ID"});
        } else {
            res.status(200).send(results);
        }
    })
};

exports.get_some_cards = (req, res, next) => {
    db.query('SELECT * from cards WHERE formation = ' + req.params.idFormation, function (error, results, fields) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"})
        }
        else if (results.length === 0) {
            res.status(404).send({status: 404, message: "No card found in the database for this formation ID"});
        } else {
            res.status(200).send(results);
        }
    })
};

exports.create_card = (req, res, next) => {
    db.query('INSERT INTO cards (name, description, pic, formation, points) ' +
        'VALUES ("' + req.body.name + '", "' + req.body.description + '", "' + req.body.pic + '",' +
        '"' + req.body.id_formation + '", "' + req.body.points + '")', function (error) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
        }
        else {
            res.status(201).send({status: 201, message: "Card created"})
        }
    })
};