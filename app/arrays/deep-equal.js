export default function deepEquals(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  for (let k = 0; k < b.length; k++) {
    if (a[k] !== b[k]) {
      return false;
    }
  }
  return true;
}
