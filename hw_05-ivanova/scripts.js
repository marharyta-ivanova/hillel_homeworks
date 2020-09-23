"use strict";

const AVAILABLE_OPERATORS = "+*";
let result;
let expression = "";
let operand;

function getUserData(title, validationFunction) {
  let result;

  do {
    result = prompt(title);

    if (result === null) {
      break;
    }
  } while (!validationFunction(result));

  return result;
}

function operatorValidation(value) {
  const trim = (value || "").trim();
  return value.length === 1 && AVAILABLE_OPERATORS.indexOf(value) !== -1;
}

function operandValidation(value) {
  const numberValue = Number(value);
  return (
    !isNaN(numberValue) &&
    Number.isInteger(numberValue) &&
    numberValue != 0 &&
    (numberValue != Infinity || numberValue != -Infinity)
  );
}

function calculateExpression(x, y, operator) {
  const xNum = Number(x);
  const yNum = Number(y);

  switch (operator) {
    case "+":
      return xNum + yNum;
    case "*":
      return xNum * yNum;
  }
}

const operator = getUserData("Введите оператор", operatorValidation);

do {
  operand = getUserData("Введите число", operandValidation, expression);
  console.log(operand);

  if (operand === null) {
    continue;
  }

  if (result === undefined) {
    result = +operand;
    expression += operand;
  } else {
    result = calculateExpression(result, operand, operator);
    expression += ` ${operator} ${operand}`;
  }
} while (operand !== null);

console.log(result);
console.log(expression);

if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
  alert("Число слишком большое");
} else {
  alert(`${expression} = ${result}`);
}
