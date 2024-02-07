const disha = 75;
const salman = 45;
if (disha > salman) {
  console.log("Dishs will get the strawberry");
} else {
  console.log("Salman will get the strawberry");
}

function get_max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const result1 = get_max(15, 10);
const result2 = get_max(50, 10);
const result = get_max(result1, result2);
console.log(`Max number is ${result}`);
