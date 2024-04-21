// push -> Insert element in array in the end
const initialArray = [1, 2, 3];
const secondArray = [4, 5, 6];
initialArray.push(4);
console.log(initialArray);

// pop -> remove element from array in the end
initialArray.pop();
console.log(initialArray);

// shift -> remove element form array in the front
initialArray.shift();
console.log(initialArray);

// unshfit -> used when you have to put in front of the array, you have to put value
initialArray.unshift(0);
console.log(initialArray);

// concat -> merge to array with concat
const finalArray = initialArray.concat(secondArray);
console.log(finalArray);
console.log(initialArray.concat(secondArray));

// forEarch -> iterating over each element of an array and applying a specified function to each element.

function logThing(str) {
  console.log(str + " is the string");
}

initialArray.forEach(logThing);
