const Express = require('express');
const router = Express.Router();

const schoolController = require("./../Controllers/schools.controller");

router.get("/", schoolController.get_all_schools);

router.get("/:id", schoolController.get_one_school);

router.post("/", schoolController.create_school);

module.exports = router;