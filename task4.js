function findAveragePhonePrice(numbers) {
  let total = 0;
  let avg = 0;
  for (let x of numbers) {
    total += x.price;
  }
  avg = total / numbers.length
  return avg.toFixed(3);
}
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

const result = findAveragePhonePrice(phones);
console.log(`The average of the phone price is : ${result}`);
