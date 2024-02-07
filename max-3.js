let num1 = 50;
let num2 = 60;
let num3 = 70;
if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is greater then ${num2} and ${num3}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is greater then ${num1} and ${num3}`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`${num3} is greater then ${num1} and ${num2}`);
} else {
  console.log("All numbers are equal");
}

console.log(Math.max(12,12))