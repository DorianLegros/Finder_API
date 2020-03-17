const Express = require('express');
const router = Express.Router();

const schoolController = require("./../Controllers/schools.controller");

router.get("/", schoolController.get_all_schools);

module.exports = router;