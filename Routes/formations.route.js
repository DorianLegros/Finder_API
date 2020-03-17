const Express = require('express');
const router = Express.Router();

const formationsController = require("./../Controllers/formations.controller");

router.get('/', formationsController.get_all_formations);

router.get('/:id', formationsController.get_one_formation);

module.exports = router;