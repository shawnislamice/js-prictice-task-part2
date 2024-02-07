const heights2 = [167, 190, 120, 165, 137];
let target = heights2[0];
for (let x of heights2) {
  if (x < target) {
    target = x;
  }
}
console.log(target);
