import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(neighbors) {
  aliveNeighbors(neighbors);
  if (aliveNeighbors(neighbors) <= 3 && aliveNeighbors(neighbors) >= 2) {
    return true;
  } else {
    return false;
  }
}
