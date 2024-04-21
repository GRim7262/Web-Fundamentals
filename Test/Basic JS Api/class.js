class Animal {
  constructor(name, legCount, speaks, color) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
    this.color = color;
  }
  static myType() {
    console.log("Animal");
  }
  animalName() {
    console.log("That animal is called " + this.name);
  }
  animalLeg() {
    console.log("That animal has " + this.legCount + " legs");
  }
  animalSpeak() {
    console.log("It speaks " + this.speaks);
  }
  animalcolor() {
    console.log("It is " + this.color + " in color");
  }
}

Animal.myType();
let dog = new Animal("Dog", 4, "Bhow Bhow", "Black"); // Create object
let cat = new Animal("Cat", 4, "Meow", "White");
cat.animalName(); // Call function on object
cat.animalLeg();
cat.animalSpeak();
cat.animalcolor();
