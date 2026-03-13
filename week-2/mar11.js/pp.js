console.log("\n=== PRACTICE PROBLEMS ===\n");

// PROBLEM 1: Extract first and last name
const fullName = "John Smith";
let [firstName , lastName ] = fullName.split(' ')
// console.log(firstName,lastName)
// Use destructuring with split to get firstName and lastName
// YOUR CODE


// PROBLEM 2: Swap two variables using destructuring
let x = 1;
let y = 2;
 [x, y] = [y,x]
// Swap them using array destructuring
// YOUR CODE
console.log(x); // should be 2
console.log(y); // should be 1


// PROBLEM 3: Extract specific properties
const person = {
  name: "Alice",
  age: 25,
  city: "New York",
  country: "USA",
  job: "Developer"
};
// Extract only name, age, and job using object destructuring
// YOUR CODE


// PROBLEM 4: Function parameter destructuring
const user1 = {
  name: "John",
  years: 30
};

function getAge({years}) {
    return `Age: ${years}`
  // Return a string: "Age: 30"
  // YOUR CODE
}
console.log(getAge(user1)); // "Age: 30"


// PROBLEM 5: Nested destructuring
const data = {
  user: {
    name: "Bob",
    address: {
      city: "London",
      country: "UK"
    }
  }
};

let{ user:{
  name  ,
  address:{
    city,
    country
  }
}
} = data;
console.log(city,country)
// Extract city and country using nested destructuring
// YOUR CODE