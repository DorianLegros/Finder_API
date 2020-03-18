const Express = require('express');
const router = Express.Router();

const cardsController = require("./../Controllers/cards.controller");

router.get('/', cardsController.get_all_cards);

router.get('/:id', cardsController.get_one_card);

router.get('/byformation/:idFormation', cardsController.get_some_cards);

router.post('/', cardsController.create_card);

router.put('/:id', cardsController.put_card);

router.delete('/:id', cardsController.delete_card);

module.exports = router;