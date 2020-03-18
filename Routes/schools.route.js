const Express = require('express');
const router = Express.Router();

const checkAuth = require("../Middlewares/check_auth");
const schoolController = require("./../Controllers/schools.controller");

router.get('/', schoolController.get_all_schools);

router.get('/:id', schoolController.get_one_school);

router.post('/', checkAuth, schoolController.create_school);

router.put('/:id', checkAuth, schoolController.put_school);

router.delete('/:id', checkAuth, schoolController.delete_school);

module.exports = router;