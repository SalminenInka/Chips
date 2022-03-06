/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const n = 2;
const rodA = [];
const rodB = [];
const rodC = [];

for (let i = n; i > 0; i--) {
  rodA.push(i);
} // rodA = [n, ..., 3, 2, 1];

function hanoi(disc, rodA, rodB, rodC) {
  do {
    if (disc === 1) {
      rodB.push(rodA.pop())
    }

  } while (rodA.length !== 0 && rodC.length !== 0);
hanoi(n, 'a', 'b', 'c');

