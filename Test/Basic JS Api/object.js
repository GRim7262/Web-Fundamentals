const sampleObj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

function originalObj(sampleObj) {
  console.log("Original Object: ", sampleObj);
}

function objKeys(sampleObj) {
  console.log("Object keys: ", Object.keys(sampleObj));
}

function objValues(sampleObj) {
  console.log("Object Values: ", Object.values(sampleObj));
}

function objEntry(sampleObj) {
  console.log("Object Entry: ", Object.entries(sampleObj));
}

function objAssign(sampleObj) {
  console.log(Object.assign({}, sampleObj, { newProperty: "newValue" }));
}

let obj = {
  name: "Harkirat",
};

console.log(obj.hasOwnProperty("name"));

originalObj(sampleObj);
objKeys(sampleObj);
objValues(sampleObj);
objEntry(sampleObj);
objAssign(sampleObj);
