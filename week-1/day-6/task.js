// console.log("\n=== ADVANCED CHALLENGES ===\n");

// // CHALLENGE 1: Contact Manager
// const contacts = [
//   { name: "John Doe", email: "john@email.com", phone: "123-456" },
//   { name: "Jane smith", email: "jane@email.com", phone: "789-012" },
//   { name: "Bob Johnson", email: "bob@email.com", phone: "345-678" }
// ];

// function findContactByName(contacts, name) {
//     let contact = contacts.find(element => element.name.toLowerCase().includes(name.toLowerCase()))
//     return contact
//   // Find contact (case-insensitive)
//   // YOUR CODE  
// }

// function getAllEmails(contacts) {
//     let email = []
//     for(let abc in contacts){
//         email.push(contacts[abc].email)
//     }
//     return email
//   // Return array of all email addresses
//   // YOUR CODE
// }

// function addContact(contacts, name, email, phone) {
//     contacts.push({name,email,phone})
//     return 'Added new contact successfuly'
//   // Add new contact to array
//   // YOUR CODE
// }

// function formatContact(contact) {
//     let cn = contact
//     return `"Name: ${cn.name} | Email: ${cn.email} | Phone: ${cn.phone}"`
//   // Return: "Name: John Doe | Email: john@email.com | Phone: 123-456"
//   // YOUR CODE
// }

// // Test your functions
// // console.log(findContactByName(contacts, "jane"));
// // console.log(getAllEmails(contacts));
// // console.log(formatContact(contacts[0]));
// // console.log(addContact(contacts,'ayush','ayu@gmail.com','123443'));
// // console.log(contacts)

// // CHALLENGE 2: Product Inventory
// const products = [
//   { id: 1, name: "Laptop", price: 999, stock: 5 },
//   { id: 2, name: "Mouse", price: 25, stock: 50 },
//   { id: 3, name: "Keyboard", price: 75, stock: 30 }
// ];

// function getTotalValue(products) {
//     let totalValue = products.reduce((sum,current)=> sum += current.price * current.stock, 0)
//     return totalValue
//   // Calculate total inventory value (price × stock for all)
//   // YOUR CODE
// }

// function getLowStock(products, threshold) {
//     let lowStock = products.filter( current => current.stock <= threshold)
//     return lowStock
//   // Return products with stock below threshold
//   // YOUR CODE
// }

// function updateStock(products, id, newStock) {
//     let element = products.find(current => current.id === id)
//     if(!element) return 'Product not found'
//     element.stock = newStock;
//     return 'Stock updated'
//   // Find product by id and update stock
//   // YOUR CODE
// }

// // Test
// // console.log(getTotalValue(products));
// // console.log(getLowStock(products, 10));
// // console.log(updateStock(products, 1,100));
// console.log(getLowStock(products, 100))


// // CHALLENGE 3: Grade Book
// const students = [
//   { name: "Alice", grades: [85, 90, 78, 92] },
//   { name: "Bob", grades: [78, 85, 80, 88] },
//   { name: "Charlie", grades: [92, 95, 89, 94] }
// ];

// function calculateAverage(grades) {
//     let sum =0;
//     for (let element in grades){
//         sum += grades[element]
//     }
//     return sum/grades.length
//   // Calculate average of array of grades
//   // YOUR CODE
// }

// function getStudentAverage(student) {
//     let grade = student.grades
//         let sum =0;
//     for (let element in grade){
//         sum += grade[element]
//     }
//     return sum/grade.length
//   // Return student's average grade
//   // YOUR CODE
// }

// function getTopStudent(students) {
    
    
//   // Return student with highest averarge
//   // YOUR CODE
// }

// function addGrade(students, studentName, grade) {
//   // Add grade to specific student
//   // YOUR CODE
// }

// // Test
// // console.log(getStudentAverage(students[0]));
// // console.log(getTopStudent(students));

// console.log("\n=== STRING PRACTICE PROBLEMS ===\n");

// // PROBLEM 1: Capitalize first letter
// function capitalize(str) {
//     let ans = str[0].toUpperCase()
//     return `${ans}${str.slice(1)}`
//   // "hello" -> "Hello"
//   // YOUR CODE
// }

// // PROBLEM 2: Count vowels
// function countVowels(str) {
//     let string = str.toLowerCase();
//     let count = 0 ;
//     for(let char of string){
//         if('aeiou'.includes(char)){
//             count++;
//         }

//     }
//     return count
//   // "hello world" -> 3
//   // YOUR CODE
// }

// // PROBLEM 3: Reverse string
// function reverseString(str) {
//     let ans = ''
//     for(let char of str ){
//        ans = char + ans 
//     }
//     return ans;
//   // "hello" -> "olleh"
//   // YOUR CODE
// }

// // PROBLEM 4: Check palindrome
// function isPalindrome(str) {
//     const text = str.toLowerCase().split(" ").join('') 
//        let ans = ''
//     for(let char of text ){
//        ans = char + ans 
//     }
//     return text === ans
//   // "racecar" -> true
//   // "hello" -> false
//   // Ignore case and spaces
//   // YOUR CODE
// }
  


// // PROBLEM 5: Get initials
// function getInitials(name) {
//     let nameArr = name.split(' ')
//     let ans = '';
//     for(const word of nameArr){
//         ans = ans + word[0];
//     }
//     return ans;
//   // "John Doe" -> "JD"
//   // "Alice Bob Charlie" -> "ABC"
//   // YOUR CODE
// }

// // PROBLEM 6: Title case
// function titleCase(str) {
//     const wordArr = str.split(' ')
//     let ans = []
//     for(const word of wordArr){
//         const change = word[0].toUpperCase() + word.slice(1)
//         ans.push(change)
//     }
//      return ans.join(' ')
    
//   // "hello world from javascript" -> "Hello World From Javascript"
//   // YOUR CODE
// }

// // Test all functions
// // console.log(capitalize("hello"));
// // console.log(countVowels("javascript"));
// // console.log(reverseString("hello"));
// // console.log(isPalindrome("A man a plan a canal Panama"));
// // console.log(getInitials("John Doe Smith"));
// console.log(titleCase("hello world from javascript"));

console.log("\n=== STRING CHALLENGES ===\n");

// CHALLENGE 1: Slug generator
function slugify(text) {
    let ans = text.toLowerCase().replace(/[^a-z0-9 ]/gi,'').replaceAll(' ','-')
    return ans
  // "Hello World 123!" -> "hello-world-123"
  // Remove special chars, lowercase, hyphens for spaces
  // YOUR CODE
}

// CHALLENGE 2: Truncate with ellipsis
function truncate(text, maxLength) {
    if(text.length > maxLength-3){
        return text.slice(0,maxLength) + '...'
    }
    return text
  // If longer than maxLength, cut and add "..."
  // "Hello World", 8 -> "Hello..."
  // YOUR CODE
}

// CHALLENGE 3: Word frequency
function wordFrequency(text) {
    let str = text.toLowerCase().split(' ');
    let result = {}
    for(const word of str){
        if(word in result){
            result[word]++
        }else{
            result[word] = 1;
        }
    }
    return result
    
  // Return object with word counts
  // "hello world hello" -> {hello: 2, world: 1}
  // Case-insensitive
  // YOUR CODE
}

// CHALLENGE 4: Mask email
function maskEmail(email) {
    const [userName,domain] = email.split('@') 
   const mask = userName[0]+ '***'+userName.at(-1)


  // "john.doe@example.com" -> "j***e@example.com"
  // Keep first and last letter of username
  // YOUR CODE
}

// CHALLENGE 5: Extract hashtags
function extractHashtags(text) {
    // let hash = text.split('#')
    // let result = []
    // for(let i= 1; i < hash.length; i++){
    //     result.push(hash[i])
    // }
    // return result;
    let hash = text.split(' ')
    let result = []
   for(let word of hash){
    if(word.startsWith('#')){
        let ans = word.replace(/[^a-z0-9]/gi,'')
        result.push(ans)
    }
   }
    return result;


  // "I love #javascript and #coding!" -> ["javascript", "coding"]
  // YOUR CODE
}

// CHALLENGE 6: Validate username
function isValidUsername(username) {
    const check1 = (username.length >= 3 && username.length <= 16) 
    const check2 = /[^a-z0-9_-]/gi.test(username)
    const check3 = /^[a]/i.test(username)
    let finalAns = check1 && check2 && check3
  // Rules:
  // - 3-16 characters
  // - Only letters, numbers, underscore, hyphen
  // - Must start with letter
  // YOUR CODE
}

// // Test
// console.log(slugify("Hello World 123!"));
// console.log(truncate("This is a long text", 10));
// console.log(wordFrequency("dog cat rat cat dog cat"));
// console.log(maskEmail("john.doe@example.com"));
// console.log(extractHashtags("I love #javascript and #coding!"));
console.log(isValidUsername("john_doe"));
console.log(isValidUsername("123invalid"));