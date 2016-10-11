export default function arraySum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = count + arr[i];
  }

  return count;
}
