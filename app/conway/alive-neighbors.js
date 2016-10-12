export default function aliveNeighbors(neighbors) {
  let count = 0;
  for (let i = 0; i < neighbors.length; i++) {
    if (neighbors[i] === true) {
      count++;
    }
  }
  return count;
}
