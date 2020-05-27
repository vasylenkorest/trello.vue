angular.module('app').factory('cardFactory', function () {
	var service = {};

	var cards = [
		{
			id: 1,
			description: 'Fix bug in players',
			list_id: 1
		},
		{
			id: 2,
			description: 'Add feature with D3',
			list_id: 1
		},
		{
			id: 3,
			description: 'Learn Angular',
			list_id: 3
		}
	];

	service.getCards = function (list) {
		return _.filter(cards, { list_id: list.id });
	};

	service.createCard = function (list, cardDescription) {
		cards.push({
			id: _.uniqueId('card_'),
			description: cardDescription,
			list_id: list.id
		});
	};

	service.deleteCard = function (card) {
		return _.pull(cards, card);
	};

	service.updateCard = function(updateingCard) {
		var card = _.find(cards, { id: updateingCard.id });
		card.description = updateingCard.description;
		card.list_id = updateingCard.list_id;
	};

	return service;
})