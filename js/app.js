/*Get the HTMLCollection of icons and store the count in a variable*/

const cards = document.getElementsByTagName("UL")[1].getElementsByTagName("I");
const cardsLength = cards.length;

/*Create a list that holds all of your cards icons*/
const allCards = []
for (let i =0; i<cardsLength; i++) {
    const icon = document.getElementsByTagName("UL")[1].getElementsByTagName("LI")[i].innerHTML.trim();
    allCards.push(icon);
}

/* shuffle the list of cards using the provided "shuffle" method below*/
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

/*
Apply the suffle function to the list of icons*/
const shuffleallCardsIcons = shuffle(allCards);

/*
Empty the deck tags holding the current icons from the hmtl*/
let mainDeck = document.getElementsByClassName("deck")[0]
while (mainDeck.firstChild) mainDeck.removeChild(mainDeck.firstChild);


/*Create the oneCard const for the addeventlistener on click to work*/
const oneCard = document.getElementsByClassName('card')

/*Generate a new html with the suffled li tags */
for (let i = 0; i < cardsLength; i++) {
    const newElement = document.createElement('li');
    newElement.className = 'card';
    newElement.innerHTML = shuffleallCardsIcons[i];
    mainDeck.appendChild(newElement);
    oneCard[i].addEventListener('click', logic)   /*set up the event listener for a card. If a card is clicked:*/
}


/*Create empty variables to hold the open and matched cards */
let openCards = []
let matchedCards = []


/*Logic function displays the cards, pushed the open cards to the openCards variable, checks if the cards marches and displays a result message*/
function logic(event){
    displayCard(event)
    openCards.push(event.currentTarget)
    matches(event) 
    youWon()
}

/*Display the card on click, function is passed in the logic function*/
function displayCard(event) {
        event.currentTarget.classList.add("open")
        event.currentTarget.classList.add("show")
    }

/*Checkes if the clicked cards are similar ot not from the openCards array. 
If not it hides them again using the hideCard function and removes one stars and/or one move to the counter
*If it maches keep the open and show class and adds the match class
*once the check finished it empties the openCards variable to welcome the next 2 selected cards
*/
function matches (e){
    if ((openCards.length) % 2 === 0) {
        if (openCards[0].getElementsByTagName('I')[0].className !== openCards[1].getElementsByTagName('I')[0].className)
        {
            setTimeout(function(){
                hideCard(openCards[0])       
                hideCard(openCards[1])
                oneLessMove()
                oneLessStar()
                noMoreMoves()
                openCards = []      
            },800)
        } else {
            matchedCards.push(event.currentTarget)
            validCard(openCards[0]) 
            validCard(openCards[1]) 
            openCards = []                       
        }  
    }   
}

/*HideCards function called from the matches function removes the open and show classes from the unmached li tags */
function hideCard(element) {
    element.classList.remove("open")
    element.classList.remove("show")
}

/*HideCards function called from the matches function adds the match class to the matching cards */
function validCard(element) {
    element.classList.add("match")
}

/*Refreshes the page*/
function refreshPage(){
    window.location.reload();
} 

/*Display a message at the end of the game when the person wins with its score.*/
function youWon() {
    if (matchedCards.length === cardsLength/2)
    setTimeout((
    ) => {
        b = document.getElementsByClassName('deck')[0]
        while (b.firstChild) {
                b.removeChild(b.firstChild);
            }
            b.innerHTML = "<p class='message'>Congratulations, you won! <br><span class ='scoreresult'>With "+movesCount+" move(s) and " + starsCount  +" star(s) left.</span></p>"
            btn = document.createElement("BUTTON")
            btn.setAttribute("onclick","refreshPage()");
            btn.className +='replayButton'
            t = document.createTextNode("REPLAY")
            btn.appendChild(t); 
            b.appendChild(btn);   
    }, 500);  
}

/*Removes one move. Called from the match function, it remove one move to the counter when there is an unmatch*/
function oneLessMove() {  
    let moves = document.getElementsByClassName('moves')[0]   
    moves.innerHTML = parseFloat(moves.innerHTML)-1  
}

/*Removes one star every 6 wrong moves. Called from the match function*/
function oneLessStar() {
    let movesl = document.getElementsByClassName('moves')[0]   
    movesCount = parseFloat(movesl.innerHTML)  
    if (movesCount === 12 | movesCount === 6 | movesCount === 0) {
        let stars = document.getElementsByClassName('stars')[0]
        stars.removeChild(stars.lastElementChild)
        starsCount = document.getElementsByClassName('stars')[0].getElementsByTagName("li").length 
    }    
}

/*Final message when the person losses, called in the match function*/
function noMoreMoves() {
    if (document.getElementsByClassName('stars')[0].getElementsByTagName("li").length === 0) 
    setTimeout((
        ) => {
            b = document.getElementsByClassName('deck')[0]
            while (b.firstChild) {
                b.removeChild(b.firstChild);
            }
            b.innerHTML = "<p class='message'>Sorry, you lost.<br><span class ='scoreresult'>With "+movesCount+" move and " + starsCount  +" star left.</span></p>"
            btn = document.createElement("BUTTON")
            btn.setAttribute("onclick","refreshPage()");
            btn.className +='replayButton'
            t = document.createTextNode("REPLAY")
            btn.appendChild(t); 
            b.appendChild(btn);   


        }, 150);  
    }
 