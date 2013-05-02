function simpleShuffle (deck, deckSize)
{ 
    for(i=0;i<deckSize;i++){
	j = parseInt(Math.random() * 1000) + 1;

	card = deck[i];
	deck[i] = deck[j];
	deck[j] = card;
    }
    return deck;
}

function makeDeck (deckSize)
{
    var deck = [];
    for(i=0;i<deckSize;i++)
    {
	deck[i] = i + 1;
    }
    return deck;
}

var deckSize = 10;
var deck =  makeDeck(deckSize);
console.log(deck);

deck = simpleShuffle(deck, deckSize);
console.log(deck);
