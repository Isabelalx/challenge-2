// task 1 
let products = ["blush", "lipstick", "eyeshadow", "foundation", "mascara"];
products.push("eyeliner");
console.log(products);
products.pop();
console.log("Updated products:",products);  

// task 2
let scores = [100, 200, 300, 400, 500];
scores[1] = 150;

let total = scores.reduce((a, b) => a + b, 0);
let average = total / scores.length;

console.log("Updated scores:", scores);
console.log("Total scores:", total);
console.log("Average scores:", average);

// task 3
let employee = {
    name: "Isabela",
    age: 26,
    position: "developer",
    isActive: true
    };

console.log(employee);

employee.department = "IT";
employee.position = "senior developer";
console.log("Updated employee:", employee);

// task 4
let customers = [
    { name: "Rodrigo",email: "Rodrigogarro@gmail.com", purchaseAmount: 100 },
    { name: "Maria", email: "Mariasophia@gmail.com", purchaseAmount: 200 },
    { name: "Lucas", email: "Lucasferreira@gmail.com", purchaseAmount: 300 }
    ];
console.log(customers);

customers.push({ name: "Carla", email: "Carlalinda@gmail.com", purchaseAmount: 400 });
console.log("Updated customers:", customers);

// task 5
let orders = [
    orderID: "01",
    customerName: "Rodrigo",
    orderAmount: 100,   
    calculateTax: function() {
        const taxRate = 0.14;       
        return this.orderAmount * taxRate;
    }   
    ];
console.log(orders);
console.log("Tax amount:", orders.calculateTax());
