"use strict";

function getFirstOperand() {
  let firstOperand;

  do {
    firstOperand = prompt("Введите первое число") || firstOperand.trim();
  } while (isNaN(firstOperand));

  return Number(firstOperand);
}

function getOperator() {
  let mathOperator;

  do {
    mathOperator = prompt(
      "Введите один из математических операторов (+, -, *, /, **, %)"
    );
  } while (
    !(
      mathOperator === "+" ||
      mathOperator === "-" ||
      mathOperator === "*" ||
      mathOperator === "/" ||
      mathOperator === "**" ||
      mathOperator === "%"
    )
  );

  return mathOperator;
}

function getSecondOperand() {
  let secondOperand;

  do {
    secondOperand = prompt("Введите второе число") || secondOperand.trim();
  } while (isNaN(secondOperand));

  return Number(secondOperand);
}

function calculate(firstOperand, mathOperator, secondOperand) {
  let answer;

  switch (mathOperator) {
    case "+":
      answer = Number(firstOperand) + Number(secondOperand);
      break;
    case "-":
      answer = firstOperand - secondOperand;
      break;
    case "*":
      answer = firstOperand * secondOperand;
      break;
    case "/":
      answer = firstOperand / secondOperand;
      break;
    case "**":
      answer = firstOperand ** secondOperand;
      break;
    case "%":
      answer = firstOperand % secondOperand;
      break;
  }

  return `${firstOperand} ${mathOperator} ${secondOperand} = ${answer}`;
}

const firstOperand = getFirstOperand();
const mathOperator = getOperator();
const secondOperand = getSecondOperand();
const answer = calculate(firstOperand, mathOperator, secondOperand);

alert(answer);
