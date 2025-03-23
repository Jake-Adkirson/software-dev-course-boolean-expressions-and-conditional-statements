const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}
if (choice === "mountains" && hasTorch) {
  console.log("As you exit the dark mountains you encounter a skeleton laying against the rocks.");
 } const choiceTwo = readline.question("Do you want to investigate?\(Yes/No\)")
 if (choice === "mountains" && choiceTwo === "Yes" && hasTorch) {
    let hasSword = true;
    console.log("You find a sword in the skeletons hand and take it with you.");
 }  else if (choice === "mountains" && choiceTwo === "No" && hasTorch) {
  let hasSword = false;
  console.log("You leave the skeleton and head to the nearby forest.");
}
else if (choice === "village" && hasTorch) {
  console.log("As you enter the town you notice a goblin merchant with a sign that says \"Free Samples\".");
} const choiceThree = readline.question("Do you want to speak with the merchant?\(Yes/No\)")
  if (choice === "village" && choiceThree === "Yes") {
    let hasHealthPotion = true;
    console.log("The goblin merchant greets you excitedly and tells you about his wares. At the end of his demonstration he hands you a health potion.")
} else if (choice === "village" && choiceThree === "No") {
  let hasHealthPotion = false;
  console.log("You decide you don't have time for the free samples. Maybe some other time");
}