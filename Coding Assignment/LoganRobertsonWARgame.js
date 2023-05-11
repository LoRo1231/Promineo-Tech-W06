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

const value = [2,3,4,5,6,7,8,9, 10,"J","Q","K","A"];


//card class
//each card has different number values & different suits that we can pass in

class Card{
    constructor(suit, value){
        this.value = value;
        this.suit = suit;
        //need new prop. to rep. face value (jack = 11)
    }
    describeNewCard(){
       console.log(`${this.value} of ${this.suit}`);
    }
}

let card = new Card(); 
console.log(card);

card.describeNewCard();

//Not sure if this is the right direction, can classes pull elements from arrays?
//should the array be inside the class instead? Currently console.loging Undefined.



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
    createDeck(){
        for(let i = 0; i < value.length; i++){
            console.log(value[i]);
            for(let x = 0; x < suit.length; x++){
                console.log(suit[x]);
                this.deck.push(new Card(suit[x], value[i])); //when pushing new card object think about string card needing values
            }
        }
        console.log(this.deck[0].value); //consider when comparing cards
    }
}

let deck = new Deck();
deck.createDeck();

//shuffle deck?

//player class?

class Person{
    constructor(name){
        this.name = name;
    }
}

//game logic class

//deal deck evenly between 2 players
//each deck should be an array that the order randomly shuffles
//compare the 1st card of each to one another & assign a winner
//counts wins for each player?
//compare number of wins for each player to determine final winner