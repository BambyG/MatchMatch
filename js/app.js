/*
 * Create a list that holds all of your cards
 */

const cards = document.getElementsByTagName("UL")[1].getElementsByTagName("I");

/*const allCardsIcons = [...cards];*/

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

const suffleallCardsIcons = shuffle(allCards);

const mainDeck = document.getElementsByClassName("deck")[0]
while (mainDeck.firstChild) mainDeck.removeChild(mainDeck.firstChild);

for (let i =1; i<=cards.length; i++) {
        const newLi = document.createElement('li');
        newLi.className = 'card open show';
        suffleallCardsIcons.forEach(element =>{
            newLi.innerHTML =element});
        mainDeck.appendChild(newLi);
}
