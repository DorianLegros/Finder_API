const Express = require('express');
const router = Express.Router();

const cardsController = require("./../Controllers/cards.controller");

router.get('/', cardsController.get_all_cards);

router.get('/:id', cardsController.get_one_card);

module.exports = router;