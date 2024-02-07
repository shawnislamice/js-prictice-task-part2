const heights2 = ["rahim", "robin", "rafi", "ron", "rashed",'s'];
let target = heights2[0];
for (let x of heights2) {
  if (x.length < target.length) {
    target = x;
  }
}
console.log(target);
