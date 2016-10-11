export default function aliveNeighbors(neighbors) {
  let count = 0;
  for (i = 0; i < neighbors.length; i++) {
    count = count + neighbors[i];
  }

  return [count];
}
