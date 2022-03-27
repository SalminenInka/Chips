/* eslint-disable no-console */
function coinflip() {
  let result = '';
  const flip = Math.floor((Math.random() * 11) + 1);
  if (flip % 2 === 0) {
    result = 'Heads!';
  } else if (flip % 2 !== 0) {
    result = 'Tails!';
  }
  return result;
}
console.log(coinflip());
// Heads loses if the flip is even.
// Tails loses if the flip is odd.
