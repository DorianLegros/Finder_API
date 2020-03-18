const Express = require('express');
const router = Express.Router();

const adminController = require("./../Controllers/admin.controller");

router.post('/create', adminController.create_admin);

router.post('/login', adminController.login);

module.exports = router;