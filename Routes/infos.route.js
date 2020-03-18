const Express = require('express');
const router = Express.Router();

const infoController = require("./../Controllers/infos.controller");

router.get('/', infoController.get_all_infos);

router.post('/', infoController.create_info);

router.delete('/:id', infoController.delete_info);

module.exports = router;