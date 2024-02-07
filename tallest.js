const height = [65, 66, 68, 75, 78, 60, 78, 80];
let max = 0;
for (x of height) {
  if (x > max) {
    max = x;
  }
}
console.log(max);

function get_max(numbers) {
  let max = 0;
  for (let x of numbers) {
    if (x > max) {
      max = x;
    }
  }
  return max;
}
const result = get_max(height);
console.log(`Max number is ${result}`);
