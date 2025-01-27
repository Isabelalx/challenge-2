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
