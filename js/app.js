/*
 * Select all the cards 
 */

const cards = document.getElementsByTagName("UL")[1].getElementsByTagName("I");

/*
 * Calculate the number of cards in the game
 */
const cardsLength = document.getElementsByTagName("UL")[1].getElementsByTagName("I").length;

/*
 * Create a list that holds all of your cards icons
 */

const allCards = []
for (let i =0; i<cards.length; i++) {
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
    oneCard[i].addEventListener('click', logic)   
}

var openCards = []

function logic(event){
    displayCard(event)
    openCards.push(event.currentTarget)
    matches(event) 

function displayCard(event) {
        event.currentTarget.classList.add("open")
        event.currentTarget.classList.add("show")
    }

function matches (e){
    if ((openCards.length) % 2 === 0) {
        if (openCards[0].getElementsByTagName('I')[0].className !== openCards[1].getElementsByTagName('I')[0].className){
            setTimeout(function(){
                hideCard(openCards[0])       
                hideCard(openCards[1]) 
                openCards = []      
            },500)
        } else {
            openCards = []
        } 
         
    }
}

}


function hideCard(element) {
    element.classList.remove("open")
    element.classList.remove("show")
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
