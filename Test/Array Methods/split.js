const names = "Bilbo, Gandalf, Nazgul";

const arr = names.split(", ");

for (let name of arr) {
  console.log(`A message to ${name}`);
}
