export default function arraySum(arr) {
  let arraySum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arraySum = arraySum + arr[i];
  }
  return arraySum;
}
