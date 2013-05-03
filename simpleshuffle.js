//Simple shuffle function. Takes in an array called "deck"
//Returns deck with elements shifted randomly.
function simpleShuffle (deck, deckSize)
{ 
    for(i=0;i<deckSize;i++){
	var j = parseInt(Math.random() * 100000) + 1;
	j = j%deckSize

	var card = deck[i];
	deck[i] = deck[j];
	deck[j] = card;
    }
    return deck;
}
//Creates an ordered integer array of deckSize.
function makeDeck (deckSize)
{
    var deck = [];
    for(i=0;i<deckSize;i++)
    {
	deck[i] = i + 1;
    }
    return deck;
}
//function for displaying the values in a 2D array.
function display2DArray(multiArray, rows){
	for(i=0;i<rows;i++){
		console.log(multiArray[i]);
		
	}
}

function numberSpreadInitialize(rows, columns){
	var multiArray =[];
	
	for (i=0;i<rows;i++){
		multiArray[i] = [];
		for(j=0;j<=columns;j++){
		
			if (j == 0){
				multiArray[i][j] = i;
			}
			else
				multiArray[i][j] = 0;
		}
	}
	return multiArray;
}

function numberSpread(multiArray, deck, deckSize){
	for (i=0;i<deckSize;i++){
		for(j=0;j<=deckSize;j++){
			if(deck[i] == j){
				multiArray[i][j] = multiArray[i][j] + 1;
			}
		}
	}
	
	return multiArray;
}

function shuffleDistro(multiArray, deck, deckSize){
	var numberOfShuffles = 10000;
	var shuffledDeck = deck;
	var tempArray = multiArray;
	for(k=0;k<numberOfShuffles;k++){
		shuffledDeck = simpleShuffle(shuffledDeck, deckSize);
		tempArray = numberSpread(tempArray, shuffledDeck, deckSize);
		
	
		
	}
	
	
	return tempArray;
}
	


//making and verifying making a deck array.
var deckSize = 10;
var deck =  makeDeck(deckSize);
console.log('Beginning Deck');
console.log(deck);

//shuffling and verifying shuffling array.
deck = simpleShuffle(deck, deckSize);
console.log('Example of Shuffled Deck.');
console.log(deck);

//making integer array for number spread.
var rows = deckSize;
var columns = deckSize;
var numberSpreadTable = numberSpreadInitialize(rows, columns);
numberSpreadTable = shuffleDistro(numberSpreadTable, deck, deckSize);
console.log('Distribution of cards after each shuffle over 10000 shuffles.');
display2DArray(numberSpreadTable, rows);


