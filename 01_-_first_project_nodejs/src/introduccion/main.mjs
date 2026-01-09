import { multiply, divide } from "./math.mjs"; 

console.log('Multiplicación:', multiply(5, 3));
try {
    console.log('División:', divide(10, 0));
} catch (error) {
    console.error(`⚠ Error: ${error.message}`);
}