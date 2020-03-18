const Express = require('express');
const router = Express.Router();

const checkAuth = require("../Middlewares/check_auth");
const infoController = require("./../Controllers/infos.controller");

router.get('/', checkAuth, infoController.get_all_infos);

router.post('/', infoController.create_info);

router.delete('/:id', checkAuth, infoController.delete_info);

module.exports = router;