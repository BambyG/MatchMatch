/*
 * Select all the cards 
 */

const cards = document.getElementsByTagName("UL")[1].getElementsByTagName("I");
const cardsLength = cards.length;

/*
 * Create a list that holds all of your cards icons
 */

const allCards = []
for (let i =0; i<cardsLength; i++) {
    const icon = document.getElementsByTagName("UL")[1].getElementsByTagName("LI")[i].innerHTML.trim();
    allCards.push(icon);
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const shuffleallCardsIcons = shuffle(allCards);

let mainDeck = document.getElementsByClassName("deck")[0]
while (mainDeck.firstChild) mainDeck.removeChild(mainDeck.firstChild);

const oneCard = document.getElementsByClassName('card')

for (let i = 0; i < cardsLength; i++) {
    const newElement = document.createElement('li');
    newElement.className = 'card';
    newElement.innerHTML = shuffleallCardsIcons[i];
    mainDeck.appendChild(newElement);
    oneCard[i].addEventListener('click', logic)   /*set up the event listener for a card. If a card is clicked:*/
}


let openCards = []
let matchedCards = []

function logic(event){
    displayCard(event)
    openCards.push(event.currentTarget)
    matches(event) 
    youWon()
}

/*Display the card on click*/
function displayCard(event) {
        event.currentTarget.classList.add("open")
        event.currentTarget.classList.add("show")
    }

/*Checkes if the clicked cards are similar ot not. If not it hides them again using the hideCard function. If it maches keep the open and show class*/
function matches (e){
    if ((openCards.length) % 2 === 0) {
        if (openCards[0].getElementsByTagName('I')[0].className !== openCards[1].getElementsByTagName('I')[0].className){
            setTimeout(function(){
                hideCard(openCards[0])       
                hideCard(openCards[1])
                oneLessMove()
                oneLessStar()
                noMoreMoves()
                openCards = []      
            },500)
        } else {
            matchedCards.push(event.currentTarget)
            validCard(openCards[0]) 
            validCard(openCards[1]) 
            openCards = []                       
        }  
    }   
}

function hideCard(element) {
    element.classList.remove("open")
    element.classList.remove("show")
}


function validCard(element) {
    element.classList.add("match")
}

/*Hide the cards by remove the set open and show class on click*/


function refreshPage(){
    window.location.reload();
} 

function youWon() {
    if (matchedCards.length === cardsLength/2)
    setTimeout((
    ) => {
        alert("YOU WON!")  
    }, 500);  
}

function oneLessMove() {  
    let moves = document.getElementsByClassName('moves')[0]   
    moves.innerHTML = parseFloat(moves.innerHTML)-1  
}

function oneLessStar() {
    let stars = document.getElementsByClassName('stars')[0]
    stars.removeChild(stars.lastElementChild)
}

function noMoreMoves() {
    if (document.getElementsByClassName('stars')[0].getElementsByTagName("li").length === 0) 
    setTimeout((
        ) => {
            alert("YOU LOST!")  
        }, 150);  
    }
 


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
