// assignment-4a-object-utils.js

// 1. Deep clone
function deepClone(obj) {
    const newObj = structuredClone(obj)
    return newObj
  // Create complete copy
  // YOUR CODE
}

// 2. Merge objects
function mergeObjects(obj1, obj2) {
  // Combine, obj2 overrides obj1
  // YOUR CODE
  const mObj = Object.assign({},obj1,obj2)
  return mObj
}

// 3. Get nested property
function getNestedProperty(obj, path) {
    let nextpath = path.split('.')
    let current = obj;
    for(let element of nextpath){
        current = current[element]
    }
    return current
  // path: "user.profile.name"
  // Returns value or undefined
  // YOUR CODE
}

// 4. Filter object
function filterObject(obj, conditionFn) {
   let ans = Object.entries(obj)
    let fAns = ans.filter(conditionFn)
    let finalAns = Object.fromEntries(fAns)
    return finalAns
  // Keep properties that pass condition
  // YOUR CODE
}

// Test
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// console.log(mergeObjects(obj1, obj2));

// const nested = {
//   user: {
//     profile: { name: "Alice" }
//   }
// };
// console.log(getNestedProperty(nested, "user.profile.name"));


// assignment-4b-string-toolkit.js

// 1. Slug generator
function slugify(text) {
  // YOUR CODE
}

// 2. Truncate
function truncate(text, maxLength) {
  // YOUR CODE
}

// 3. Word frequency
function wordFrequency(text) {
  // YOUR CODE
}

// 4. Mask email
function maskEmail(email) {
  // YOUR CODE
}

// 5. Caesar cipher
function caesarCipher(text, shift) {
    const changed = String.fromCharCode(text.charCodeAt(text.length-1)+shift)
    finalAns = text.slice(1,text.length) + changed;
    return finalAns
    // let temp = splited[0]
    // splited[0] = splited[shift]
    // splited[shift] = temp
    // const ans = splited.join('')
    // return ans;


  // "abc", 1 -> "bcd"
  // YOUR CODE
}

// // Test all
// console.log(slugify("Hello World!"));
// console.log(truncate("Long text here", 10));
// console.log(wordFrequency("hello hello world"));
// console.log(maskEmail("test@email.com"));
console.log(caesarCipher("jkl", 1));