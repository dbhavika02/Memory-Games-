const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshakes',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshakes',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
];

cardArray.sort(() =>0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let  cardsChosen = []
let  cardChosenIds = []
let cardWon = []

function creatBoard(){
    for( let i=0;i<cardArray.length;i++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        gridDisplay.appendChild(card)
    }
}
creatBoard()


function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionaOnelId = cardChosenIds[0]
    const optionaTwolId = cardChosenIds[1] 

    if(optionaOnelId == optionaTwolId){
        cards[optionaOnelId].setAttribute('src','images/blank.png')
        cards[optionaTwolId].setAttribute('src','images/blank.png')
        alert('you have clicked the same image')
    }



   else if(cardsChosen[0]==cardsChosen[1]){
    alert('you got a match')
    cards[optionaOnelId].setAttribute('src', 'images/white.png')
    cards[optionaTwolId].setAttribute('src', 'images/white.png')
    cards[optionaOnelId].removeEventListener('click',flipcard)
    cards[optionaTwolId].removeEventListener('click',flipcard)
    cardWon.push(cardsChosen)
    }
    else{
        cards[optionaOnelId].setAttribute('src','images/blank.png')
        cards[optionaTwolId].setAttribute('src','images/blank.png')
        alert('sorry try again!')
    }
    
    cardChosenIds = []
    cardsChosen = []
    resultDisplay.textContent=cardWon.length
    
    if(cardWon.length == cardArray.length/2){
      resultDisplay.textContent='congratulations u found them all '
    }

}

function flipcard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length ==2){
      setTimeout(checkMatch, 500)
    }

}