function add(num1, num2) {
  return num1 + num2;

}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 / num2;
}
function modulus(num1, num2) {
  return num1 % num2;
}
function calculator(a, b, operation) {
  if (operation === "+") {
    const result = add(a, b);
    return result;
  } else if (operation === "-") {
    const result = subtract(a, b);
    return result;
  } else if (operation === "*") {
    const result = multiplication(a, b);
    return result;
  } else if (operation === "/") {
    const result = division(a, b);
    return result;
  } else if (operation === "%") {
    const result = modulus(a, b);
    return result;
  } else {
    return "There an unexpected error may come";
  }
}
const result=calculator(5,5,"+")
console.log(`Your result: ${result}`)
const result2=calculator(5,5,"-")
console.log(`Your result: ${result2}`)
const result3=calculator(5,5,"*")
console.log(`Your result: ${result3}`)
const result4=calculator(5,0,"/")
console.log(`Your result: ${result4}`)
const result5=calculator(5,5,"%")
console.log(`Your result: ${result5}`)

if(typeof first !=='string'){
    console.log("Please provide a string")
}
if(Array.isArray(array)){
    console.log("This is an array")
}