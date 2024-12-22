// Filter objects from the first array that contain properties in the second array
// Input: [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}], ["color"]
// Output: [{name: "apple", color: "red"}, {name: "banana", color: "yellow"}]

const isProperyExists = function (object) {
  return function (property) {
    return property in object;
  };
};

const doesPropertiesExists = function (properties) {
  return function (object) {
    return properties.every(isProperyExists(object));
  };
};

const filterObjectsByProperties = function (objects, properties) {
  return objects.filter(doesPropertiesExists(properties));
};

console.log(filterObjectsByProperties(
  [{ name: "apple", color: "red" },
  { name: "banana", color: "yellow" }],
  ["color"]
));

console.log(filterObjectsByProperties(
  [{ name: "apple", color: "red" },
  { name: "banana" }],
  []
));