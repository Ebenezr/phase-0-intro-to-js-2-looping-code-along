// Code your solutions in this file
const cardMsg = [];
const personNames = ["Guadalupe", "Ollie", "Aki"];
function writeCards(personNames, eventName) {
  for (let i = 0; i < personNames.length; i++) {
    cardMsg.push(
      `Thank you, ${personNames[i]}, for the wonderful ${eventName} gift!`
    );
  }
  return cardMsg;
}
//writeCards(personNames, cardMsg);
function countDown() {
  let count = 10;
  while (count >= 0) {
    console.log(count--);
  }
}
