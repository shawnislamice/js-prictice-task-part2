const products = [
  {
    name: "Shampoo",
    price: 300,
    quantity: 5,
  },
  {
    name: "Snoo",
    price: 500,
    quantity: 5,
  },
  {
    name: "Body Shampoo",
    price: 600,
    quantity: 5,
  },
  {
    name: "Shampoo",
    price: 700,
    quantity: 5,
  },
  {
    name: "Shampoo",
    price: 800,
    quantity: 5,
  },
];

function get_total(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i].price;
  }
  return total;
}
const result = get_total(products);
console.log(`Total price: ${result}`);
function get_total2(numbers) {
  let total = 0;
  for (let x of numbers) {
    total += x.price;
  }
  return total;
}
const result2 = get_total(products);
console.log(`Total price: ${result2}`);

function cart_total(numbers) {
  let total = 0;
  for (let x of numbers) {
    let productPrice = x.price * x.quantity;
    total += productPrice;
  }
  return total;
}
const result3 = cart_total(products);
console.log(`You have to pay: ${result3}`);
