console.log("\n=== ADVANCED CHALLENGES ===\n");

// CHALLENGE 1: Contact Manager
const contacts = [
  { name: "John Doe", email: "john@email.com", phone: "123-456" },
  { name: "Jane smith", email: "jane@email.com", phone: "789-012" },
  { name: "Bob Johnson", email: "bob@email.com", phone: "345-678" }
];

function findContactByName(contacts, name) {
    let contact = contacts.find(element => element.name.toLowerCase().includes(name.toLowerCase()))
    return contact
  // Find contact (case-insensitive)
  // YOUR CODE  
}

function getAllEmails(contacts) {
    let email = []
    for(let abc in contacts){
        email.push(contacts[abc].email)
    }
    return email
  // Return array of all email addresses
  // YOUR CODE
}

function addContact(contacts, name, email, phone) {
    contacts.push({name,email,phone})
    return 'Added new contact successfuly'
  // Add new contact to array
  // YOUR CODE
}

function formatContact(contact) {
    let cn = contact
    return `"Name: ${cn.name} | Email: ${cn.email} | Phone: ${cn.phone}"`
  // Return: "Name: John Doe | Email: john@email.com | Phone: 123-456"
  // YOUR CODE
}

// Test your functions
// console.log(findContactByName(contacts, "jane"));
// console.log(getAllEmails(contacts));
// console.log(formatContact(contacts[0]));
// console.log(addContact(contacts,'ayush','ayu@gmail.com','123443'));
// console.log(contacts)

// CHALLENGE 2: Product Inventory
const products = [
  { id: 1, name: "Laptop", price: 999, stock: 5 },
  { id: 2, name: "Mouse", price: 25, stock: 50 },
  { id: 3, name: "Keyboard", price: 75, stock: 30 }
];

function getTotalValue(products) {
    let totalValue = products.reduce((sum,current)=> sum += current.price * current.stock, 0)
    return totalValue
  // Calculate total inventory value (price × stock for all)
  // YOUR CODE
}

function getLowStock(products, threshold) {
    let lowStock = products.filter( current => current.stock <= threshold)
    return lowStock
  // Return products with stock below threshold
  // YOUR CODE
}

function updateStock(products, id, newStock) {
    let element = products.find(current => current.id === id)
    if(!element) return 'Product not found'
    element.stock = newStock;
    return 'Stock updated'
  // Find product by id and update stock
  // YOUR CODE
}

// Test
// console.log(getTotalValue(products));
// console.log(getLowStock(products, 10));
// console.log(updateStock(products, 1,100));
console.log(getLowStock(products, 100))


// CHALLENGE 3: Grade Book
const students = [
  { name: "Alice", grades: [85, 90, 78, 92] },
  { name: "Bob", grades: [78, 85, 80, 88] },
  { name: "Charlie", grades: [92, 95, 89, 94] }
];

function calculateAverage(grades) {
    let sum =0;
    for (let element in grades){
        sum += grades[element]
    }
    return sum/grades.length
  // Calculate average of array of grades
  // YOUR CODE
}

function getStudentAverage(student) {
    let grade = student.grades
        let sum =0;
    for (let element in grade){
        sum += grade[element]
    }
    return sum/grade.length
  // Return student's average grade
  // YOUR CODE
}

function getTopStudent(students) {
    let topStudent = []
    for(let av in students){
        let grade = av.grades
    
  // Return student with highest averarge
  // YOUR CODE
}

function addGrade(students, studentName, grade) {
  // Add grade to specific student
  // YOUR CODE
}

// Test
// console.log(getStudentAverage(students[0]));
// console.log(getTopStudent(students));