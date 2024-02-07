const mobiles = [
  {
    name: "iPhone 11 Pro",
    price: 10000,
    camera: "12 MP",
    color: "Black",
  },
  {
    name: "Walton",
    price: 18000,
    camera: "12 MP",
    color: "Black",
  },
  {
    name: "Vivo",
    price: 120000,
    camera: "12 MP",
    color: "Black",
  },
  {
    name: "Tecno",
    price: 20000,
    camera: "12 MP",
    color: "Black",
  },
  {
    name: "Oppo",
    price: 13000,
    camera: "12 MP",
    color: "Black",
  },
];

function get_cheapest(phones) {
  let min = phones[0].price;
  for (let x of phones) {
    if (x.price < min) {
      min = x;
    }
  }
  return min;
}
const result = get_cheapest(mobiles);
console.log(`The cheapest price is : ${result}`);
