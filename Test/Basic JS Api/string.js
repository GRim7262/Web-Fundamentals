const str = "Vinal Pawar Pawar Pawar";

// length
console.log("Length of str: ", str.length);

// indexOf
console.log("indexOf of str: ", str.indexOf("Pawar"));

// lastIndexOf
console.log("lastIndexOf of str: ", str.lastIndexOf("Pawar"));

// slice
console.log("slice of str: ", str.slice(2, 5));

// substr
console.log("substr of str: ", str.substr(2, 5));

// replace
console.log("replace of str: ", str.replace("Vinal", "Harshal"));

// split
const value = "hi, my, name, is, vinal";
const words = value.split(",");
console.log("split of value: ", words);

// trim
const value2 = "      vinal pawar           ";
console.log("trim of val2: ", value2.trim());

// toUpperCase
const firstName = "Vinal Pawar";
console.log("toUpperCase of firstName: ", firstName.toUpperCase());

// toLowerCase
const firstName2 = "Vinal Pawar";
console.log("toLowerCase of firstName: ", firstName2.toLowerCase());
