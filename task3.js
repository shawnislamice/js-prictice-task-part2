function calculateElectronicsBudget(laptop, tablets, mobile) {
  if (
    typeof laptop !== "number" &&
    typeof tablets !== "number" &&
    typeof mobile !== "number"
  ) {
    return "Please provide a number";
  } else {
    return laptop + tablets + mobile;
  }
}
const result = calculateElectronicsBudget(35000, 15000, 20000);
console.log(`Total money required: ${result}`);
