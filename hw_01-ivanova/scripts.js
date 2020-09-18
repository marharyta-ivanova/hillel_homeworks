const name = prompt("Type your name");
const food = prompt("What's your favorite food?");
const drink = prompt("What`s your favorite drink?");

const answer = confirm(
  `Hi everybody! My name is ${name}, my favorite food is ${food} and drink is ${drink}!`
);

alert(answer);
