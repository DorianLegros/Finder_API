const Express = require('express');
const router = Express.Router();

const checkAuth = require("../Middlewares/check_auth");
const formationsController = require("./../Controllers/formations.controller");

router.get('/', formationsController.get_all_formations);

router.get('/:id', formationsController.get_one_formation);

router.get('/byschool/:idSchool', formationsController.get_some_formations);

router.post('/', checkAuth, formationsController.create_formation);

router.put('/:id', checkAuth, formationsController.put_formation);

router.delete('/:id', checkAuth, formationsController.delete_formation);

module.exports = router;