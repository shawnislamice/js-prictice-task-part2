function wood_calculator(chair, table, bed) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;
  const allChairWood = chair * perChairWood;
  const allTableWood = table * perTableWood;
  const allBedWood = bed * perBedWood;
  const totalWood = allChairWood + allTableWood + allBedWood;
  return totalWood;
}
const result = wood_calculator(5, 3, 7);
console.log(`You should require ${result} CFT wood`);
