function get_cheap(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

const phonePrices = [20000, 16000, 50000, 12000];
const result = get_cheap(phonePrices);
console.log(`The cheapest phone price ${result}`);
