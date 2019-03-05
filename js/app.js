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


for (let i = 0; i < cardsLength; i++) {
    const newElement = document.createElement('li');
    newElement.className = 'card';
    newElement.innerHTML =shuffleallCardsIcons[i];
    mainDeck.appendChild(newElement);
}

const oneCard = document.getElementsByClassName('card')

const openCards = []


/* for (let i = 0; i < cardsLength; i++) {
    oneCard[i].addEventListener('click', 
    function displayCard(event) {
        console.log(event)
        if (openCards.length<2) {
            oneCard[i].classList.add("open");
            oneCard[i].classList.add("show");
            openCards.push(oneCard[i]);
            }; 
 
        if (openCards[0].innerHTML !== openCards[1].innerHTML) {
            setTimeout(function(){
                openCards[0].classList.remove("open")
                openCards[0].classList.remove("show")
                openCards[1].classList.remove("open")
                openCards[1].classList.remove("show")
                openCards = []
            },1000)
  
        } 
      
   
      
    })}; 
     */


for (let i = 0; i < cardsLength; i++) {
    oneCard[i].addEventListener('click', 
    function displayCard(event) {
        open = event.currentTarget.classList.add("open")
        show = event.currentTarget.classList.add("show")
        openCards.push(event.currentTarget)
    
    if (openCards.length === 2 && openCards[0] !== openCards[1]){
        setTimeout(function(){
            openCards[0].classList.remove("open")
            openCards[0].classList.remove("show")
            openCards[1].classList.remove("open")
            openCards[1].classList.remove("show")
            openCards === []},1000)
  /*       open.classList.remove("open")
        show.classList.remove("show") */
        

    }
    })
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
