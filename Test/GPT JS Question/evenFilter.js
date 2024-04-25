/*
You have an array of numbers. Your task is to filter out all the even numbers from the array and return a new array containing only the odd numbers. Can you achieve this using the filter function?*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sortNumbers = numbers.filter((i) => i % 2 !== 0);
console.log(sortNumbers);
