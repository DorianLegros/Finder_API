const Express = require('express');
const router = Express.Router();

const formationsController = require("./../Controllers/formations.controller");

router.get('/', formationsController.get_all_formations);

module.exports = router;