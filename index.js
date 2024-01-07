// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i=0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
    }
    return gifts;
}
wrapGifts(gifts)

const who = ["Guadalupe", "Ollie", "Aki"];
let empty = [];
function writeCards(who) {
  for (let i = 0; i < who.length; i++) {
    empty.push(`Thank you, ${who[i]}, for the wonderful surprise gift!`);
  }
  return empty;
}

let num = 10;
function countDown(num) {
    while (num <= 10 && num>=0) {
    console.log(num--);
    }
}