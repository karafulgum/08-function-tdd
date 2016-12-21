import shouldSplit from './should-split';
import shouldHit from './should-hit';

export default function (card1, card2) {
  if (shouldHit(card1, card2) === true) {
    return 'hit';
  } else if (shouldSplit(card1, card2) === true) {
    return 'split';
  }  else {
    return 'stay';
  }
}
