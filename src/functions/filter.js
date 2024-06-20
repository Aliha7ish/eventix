export default function filterFirstTwoByName(array, condition) {
  const filteredArray = array.filter((obj) => obj.condition === condition);
  return filteredArray;
}
