function layered_discount_price(quantity) {
  const firstPrice = 100;
  const secondPrice = 90;
  const abovePrice = 70;
  if (quantity <= 100) {
    const total = quantity * firstPrice;
    return total;
  } else if (quantity <= 200) {
    const first_100_total = 100 * firstPrice;
    const remaining_quantity = quantity - 100;
    const remainingTotal = remaining_quantity * secondPrice;
    const total = first_100_total + remainingTotal;
    return total;
  } else {
    const first_100_total = 100 * firstPrice;
    const remaining_quantity = quantity - 200;
    const remainingTotal = remaining_quantity * abovePrice;
    const total = first_100_total + remainingTotal;
    return total;
  }
}
const quantity = 200;
const result = layered_discount_price(quantity);
console.log(`Discounted price: ${result}`);
