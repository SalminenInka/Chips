/* eslint-disable no-console */
/* eslint-disable no-plusplus */
function hanoi(n) {
  const rodA = [];
  const rodB = [];
  const rodC = [];
  for (let i = n; i > 0; i--) {
    rodA.push(i);
  }
  do {
    if (rodA === [] || rodA.at(-1) > rodB.at(-1)) {
      rodA.push(rodB.pop());
      console.log(`Move disc ${rodA.at(-1)} to rod A.`);
    } else if (rodA.at(-1) > rodC.at(-1)) {
      rodA.push(rodC.pop());
      console.log(`Move disc ${rodA.at(-1)} to rod A.`);
    }
    if (rodB === [] || rodB.at(-1) > rodA.at(-1)) {
      rodB.push(rodA.pop());
      console.log(`Move disc ${rodB.at(-1)} to rod B.`);
    } else if (rodB.at(-1) > rodC.at(-1)) {
      rodB.push(rodC.pop());
      console.log(`Move disc ${rodB.at(-1)} to rod B.`);
    }
    if (rodC === [] || rodC.at(-1) > rodA.at(-1)) {
      rodC.push(rodA.pop());
      console.log(`Move disc ${rodC.at(-1)} to rod C.`);
    } else if (rodC.at(-1) > rodB.at(-1)) {
      rodC.push(rodB.pop());
      console.log(`Move disc ${rodC.at(-1)} to rod C.`);
    }
  }
  while (rodA !== [] && rodC !== []);
}
hanoi(4);