// 1. Create an empty object called "person".
var person = {};

// 2. Add properties to the "person" object: name, age, city.
person.name = "John";
person.age = 30;
person.city = "New York";
console.log(person)

// 3. Remove the "age" property from the "person" object.
delete person.age
console.log(person)

// 4. Add a new property "job" with the value "Engineer" to the "person" object.
person.job = "Engineer";
console.log(person)


// 5. Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco";
console.log(person)

// 6. Print the final "person" object.
console.log("Final person object:", person);