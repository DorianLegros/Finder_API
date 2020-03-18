const Express = require('express');
const router = Express.Router();

const checkAuth = require("../Middlewares/check_auth");
const adminController = require("./../Controllers/admin.controller");

router.post('/create', checkAuth, adminController.create_admin);

router.post('/login', adminController.login);

router.delete('/:id', checkAuth, adminController.delete_admin);

router.get('/', checkAuth, adminController.get_all_admins);

module.exports = router;