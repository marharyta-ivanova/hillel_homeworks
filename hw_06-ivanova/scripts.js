"use strict";

const arr = [];
let value;
let maxInteger;
let minInteger;

while (value !== null) {
  value = prompt("Введите любое число");

  if (value !== null) {
    arr.push(value);
  }
}

console.log(arr);

// Найти общее количество введенных значений.

const elements = arr.length;
console.log(elements);

// Найти наибольшее целое число.

const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  const value2 = arr[i];
  if (Number.isInteger(Number(value2))) {
    arr2.push(value2);
  }
}
console.log(arr2);

maxInteger = Math.max.apply(Math, arr2);
console.log(maxInteger);

// Найти наименьшее целое число.

const arr3 = [];
for (let i = 0; i < arr.length; i++) {
  const value3 = arr[i];
  if (Number.isInteger(Number(value3))) {
    arr3.push(value3);
  }
}
console.log(arr3);

minInteger = Math.min.apply(Math, arr3);
console.log(minInteger);

// Найти среднее арифметическое всех целых чисел.

const arr4 = [];
for (let i = 0; i < arr.length; i++) {
  const value4 = arr[i];
  if (Number.isInteger(Number(value4))) {
    arr4.push(value4);
  }
}

let sum = 0;
for (let i = 0; i < arr4.length; i++) {
  sum += Number(arr4[i]);
}
let arithmeticMean = sum / arr4.length;
console.log(arithmeticMean);

// Найти общее количество четных положительных целых чисел.

const arr5 = [];
for (let i = 0; i < arr.length; i++) {
  const value5 = arr[i];
  if (Number.isInteger(Number(value5)) && value5 > 0 && value5 % 2 == 0) {
    arr5.push(value5);
  }
}
console.log(arr5);
console.log(arr5.length);

// Найти количество отрицательных чисел.

const arr6 = [];
for (let i = 0; i < arr.length; i++) {
  const value6 = arr[i];
  if (value6 < 0) {
    arr6.push(value6);
  }
}
console.log(arr6);
console.log(arr6.length);

// Найти сумму всех дробных чисел.

const arr7 = [];
for (let i = 0; i < arr.length; i++) {
  const value7 = arr[i];
  if (!Number.isInteger(Number(value7)) && !isNaN(value7)) {
    arr7.push(value7);
  }
}
console.log(arr7);

let sum1 = 0;
for (let i = 0; i < arr7.length; i++) {
  sum1 += Number(arr7[i]);
}
console.log(sum1);

let object = {
  allValues: arr,
  elements: elements,
  minInteger: minInteger,
  maxInteger: maxInteger,
  arithmeticMean: arithmeticMean,
  evenPositiveIntegerElements: arr5.length,
  negativeElements: arr6.length,
  fractionSum: sum1,
};

console.log(object);
