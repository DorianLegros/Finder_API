const Express = require('express');
const router = Express.Router();

const checkAuth = require("../Middlewares/check_auth");
const cardsController = require("./../Controllers/cards.controller");

router.get('/', checkAuth, cardsController.get_all_cards);

router.get('/:id', cardsController.get_one_card);

router.get('/byformation/:idFormation', cardsController.get_some_cards);

router.post('/', checkAuth, cardsController.create_card);

router.put('/:id', checkAuth, cardsController.put_card);

router.delete('/:id', checkAuth, cardsController.delete_card);

module.exports = router;