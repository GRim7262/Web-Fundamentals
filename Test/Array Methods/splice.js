const arr = ["I", "study", "JavaScript"]; // Define an array with three elements

arr.splice(0, 2); // Remove the first two elements from the array

console.log(arr); // Output: ["JavaScript"]

const arr1 = ["I", "study", "JavaScript", "right", "now"]; // Define a new array with five elements

arr1.splice(0, 3, "Let's", "Dance"); // Remove the first three elements and insert two new elements at the beginning

console.log(arr1); // Output: ["Let's", "Dance", "right", "now"]

const arr2 = ["I", "study", "JavaScript", "right", "now"]; // Define a new array with five elements
const removed = arr2.splice(0, 2); // Remove first two elements and store in 'removed'
console.log(removed); // Output: ["I", "study"]

const arr3 = ["I", "study", "JavaScript"];
arr3.splice(2, 0, "complex", "language"); // Insert 'complex' and 'language' at index 2
console.log(arr3); // Output: ["I", "study", "complex", "language", "JavaScript"]

const arr4 = [1, 2, 5];
arr4.splice(-1, 0, 3, 4); // Insert 3 and 4 before the last element
console.log(arr4); // Output: [1, 2, 3, 4, 5]
