/*
You have an array of numbers representing temperatures in Celsius. Your task is to convert each temperature to Fahrenheit using the formula 
𝐹 = (9/5)𝐶 + 32, 
and then return an array of the converted temperatures rounded to the nearest integer. Can you accomplish this using the map function in JavaScript?
*/

const celsiusTemperature = [0, 10, 20, 30, 40];
const fahrenheitTemperature = celsiusTemperature.map((i) => (i * 9) / 5 + 32);
console.log(fahrenheitTemperature);
