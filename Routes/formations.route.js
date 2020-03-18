const Express = require('express');
const router = Express.Router();

const formationsController = require("./../Controllers/formations.controller");

router.get('/', formationsController.get_all_formations);

router.get('/:id', formationsController.get_one_formation);

router.get('/byschool/:idSchool', formationsController.get_some_formations);

router.post('/', formationsController.create_formation);

router.put('/:id', formationsController.put_formation);

router.delete('/:id', formationsController.delete_formation);

module.exports = router;