// import toDecimal function from module to-decimal
const { toDecimal } = require('./to-decimal');

[
  { str: '010103', radix: 2 },
  { str: '11111111', radix: 2 },
  { str: '199', radix: 16 },
  { str: '100', radix: 8 },
  { str: '100', radix: 10 },
  { str: 'DEAD', radix: 16 },
  { str: 'BABE', radix: 16 },
  { str: 'CHAFE', radix: 16 },
  { str: 'men ny ...', radix: 4 },
  { str: '21', radix: 2 },
  { str: '89', radix: 8 },
  /* odotettavissa että 1. tai viimeinen ei kelpaa
  koska 3 ei sovi binääriin eikä H heksaadesimaaliin */
]
  .forEach((test) => {
    try {
      const asDecimal = toDecimal(test.str, test.radix);
      console.log(asDecimal);
    } catch (error) {
      console.log(error);
    }
  });
