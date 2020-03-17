const db = require("./../db");

exports.get_all_schools = (req, res, next) => {
    db.query('SELECT * from schools', function (error, results, fields) {
        if (error) throw error;
        res.status(200).send(results);
    });
};