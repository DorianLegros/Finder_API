const db = require("./../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = (req, res, next) => {
    db.query('SELECT * from admins WHERE login = "' + req.body.login + '"', function (error, results, fields) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
        } else if (results.length === 0) {
            res.status(401).send({status: 401, message: "Login failed"});
        } else {
            bcrypt.compare(req.body.password, results[0].password, (error, result) => {
                if (error) {
                    res.status(401).send({status: 401, message: "Login failed"});
                }
                if (result) {
                    const token = jwt.sign({
                            login: results[0].login,
                            id: results[0].id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: "Login successful",
                        jwtoken: token,
                        iduser: results[0].id
                    })
                } else {
                    res.status(401).send({status: 401, message: "Login failed"});
                }
            })
        }
    });
};

exports.create_admin = (req, res, next) => {
    db.query('SELECT * from admins WHERE login = "' + req.body.login + '"', function (error, results, fields) {
        if (error) {
            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
        } else if (results.length === 0) {
            bcrypt.hash(req.body.password, 10, (error, hash) => {
                if (error) {
                    res.status(500).send({status: 500, message: "Something went wrong during the password hash"});
                } else {
                    db.query("INSERT INTO admins (login, password) VALUES ('" + req.body.login + "', '" + hash + "')", function (error) {
                        if (error) {
                            res.status(500).send({status: 500, message: "Something went wrong, please verify if you're sending a valid request"});
                        } else {
                            res.status(201).send({status: 201, message: "Admin created"})
                        }
                    });
                }
            })
        } else {
            res.status(409).send({status: 409, message: "Can't create this new admin, login already exists"});
        }
    });
};


