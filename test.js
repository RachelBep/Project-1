const deck = document.querySelector("#deck")
const spread = document.querySelector("#spread");
const cardList = []

let reshuffle = () => {
  clear(cardList)
  for (var i = 0; i < 21; i++) {
    cardList.push(i + ".jpg")
  }
  let random = Math.random()
  cardList.sort(function(){return 0.5 - random}); //found on w3 schools
}

let spread = () => {
  for (var i = 0; i < 2; i++) {
    let card = document.createElement('img')
    card.src = cardlist[i]
    bilbo.classList.add('card')
    spread.append(card)
  }

}
let clear = () => {
  let cards = document.spread.childNodes;
 cards.forEach((item, i) => {
   item.remove()
 });

}

deck.addEventListener("click", (evt) => {
  clear()
  reshuffle()
  spread()
})
