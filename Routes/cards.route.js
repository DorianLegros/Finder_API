const Express = require('express');
const router = Express.Router();

const cardsController = require("./../Controllers/cards.controller");

router.get('/', cardsController.get_all_cards);

module.exports = router;