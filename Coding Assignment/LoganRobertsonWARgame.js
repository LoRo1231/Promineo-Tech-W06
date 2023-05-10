//WAR Game

//Deal 26 cards to each player with a 52 card deck
//Iterate through the turns where each player, plays a card
//The higher card gets a point
//Tied cards get no points
//After all cards are played declare a winner
//Write Unit testing using Mocha & Chi on at least 1 function

//---------------------------------------------------------------


//may need to set variable arrays for the card values & suits?

const suit = ["Spades", "Diamonds", "Hearts", "Clubs"];

const value = [2,3,4,5,6,7,8,9,"J","Q","K","A"];


//card class
//each card has different number values & different suits that we can pass in

class Card{
    constructor(suit, value){
        this.vaule = value;
        this.suit = suit;
    }
    describeNewCard(){
        `${this.value} of ${this.suit}`;
    }
}

let card = Card.describeNewCard;
console.log(card);
//Not sure if this is the right direction, can classes pull elements from arrays?
//should teh array be inside the class instead? Currently console.loging Undefined.



//deck class
//the number value & suit it belongs to makes up a deck but belongs to a card,
//so should we make the deck class hold an array of cards?

class Deck{
    constructor(card){
        this.card = card
        this.deck = [];
    }
    //function adds cards to deck as long as it is a card from the card class
    addCardToDeck(card){
        if(card instanceof Card){
            this.deck.push(card);
        }
    }
}

//shuffle deck?

//player class?

//game logic class

