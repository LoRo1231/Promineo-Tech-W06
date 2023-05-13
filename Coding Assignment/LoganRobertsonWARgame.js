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
        this.jack = 11;
        this.queen = 12;
        this.king = 13;
        this.ace = 14;
        //need new prop. to rep. face value (jack = 11)
    }
    createNewCard(){
        
    }
}

let card = new Card(); 
console.log(card);



//deck class
//the number value & suit it belongs to makes up a deck but belongs to a card,
//so should we make the deck class hold an array of cards?

class Deck{
    constructor(card){
        this.card = card
        this.deck = [];
    }
    //function adds cards to deck as long as it is a card from the card class
    
    createDeck(){
        for(let i = 0; i < value.length; i++){
            // console.log(value[i]);
            for(let x = 0; x < suit.length; x++){
                // console.log(suit[x]);
                this.deck.push(new Card(suit[x], value[i])); //when pushing new card object think about string card needing values
            }
        }
        // console.log(this.deck[0].value); //consider when comparing cards
    }

    shuffleDeck(){
        return this.deck.sort( ()=> Math.random()-.05 );
    }
}

let deck = new Deck();
deck.createDeck();

//player class?

class Player{
    constructor(name, points){
        this.name = name;
        this.points = points;
        this.hand = [];
    }
}

const playerOne = new Player("Hannah");
console.log(playerOne);
const playerTwo = new Player("Logan");
console.log(playerTwo);

//game logic class

class Game{
    constructor(){
        
    }

    dealDeck(){

        for(let i = 0; i < deck.length; i++){
            let num = deck[i];
            if(num % 2 == 0){ //Mod 2 should find the evens & push to player 1's hand
                playerOne.hand.push(num);
            } else if (num % 3 == 0){ //Mod 3 should find the odds & push to player 2's hand
                    playerTwo.hand.push(num);
                }
        }
    }

    playWar(){
        playerOne.points = 0;
        playerTwo.points = 0;
        if (playerOne.hand[i] === playerTwo.hand[i]){
            console.log("Tie - no points awarded");
        } else if (playerOne.hand[i] > playerTwo.hand[i]){
            playerOne.points += 1;
        } else if (playerOne.hand[i] < playerTwo.hand[i]){
            playerTwo.points += 1;
        }
        console.log(`Final Score Is:
        ${playerOne.name} has ${playerOne.points}
        ${playerTwo.name} has ${playerTwo.points}`);

        if(playerOne.points > playerTwo.points){
            console.log(`${playerOne.name} is the winner!!`);
        } else if (playerOne.point < playerTwo.points){
            console.log(`${playerTwo.name} is the winner!!`);
        } else console.log(`Tied Game!!`);
    }
}

let gameOne = new Game();
console.log(gameOne.dealDeck());

//deal deck evenly between 2 players
//each deck should be an array that the order randomly shuffles
//compare the 1st card of each to one another & assign a winner
//counts wins for each player?
//compare number of wins for each player to determine final winner