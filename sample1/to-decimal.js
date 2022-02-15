/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const patteri = new Map([[2, /^(0|1)+$/], [8, /^[0-7]+$/], [10, /^[0-9]+$/], [16, /^[0-9A-F]+$/i]]);
function toDecimal(str, radix) {
  let dec = 0;
  for (let i = str.length - 1, exp = 0; i >= 0; i--) {
    // dec = dec + parse ith char to int and multiply it by radix pow exp
    dec += parseInt(str.charAt(i), radix) * radix ** exp++;
    // exp is now increment by one
  }
  return dec;
}

[
  { str: '010103', radix: 2 },
  { str: '11111111', radix: 2 },
  { str: '199', radix: 16 },
  { str: '100', radix: 8 },
  { str: '100', radix: 10 },
  { str: 'DEAD', radix: 16 },
  { str: 'BABE', radix: 16 },
  { str: 'CHAFE', radix: 16 }, 
  /* odotettavissa että 1. tai viimeinen ei kelpaa
  koska 3 ei sovi binääriin eikä H heksaadesimaaliin */
]
  .forEach((test) => {
    const asDecimal = toDecimal(test.str, test.radix);
    try {
      if (test.match(patteri)) {console.log('Tämä kelpaa.')
    } else {
        throw new Error()
      }
    console.log(asDecimal);
  } catch(error) {
    console.log('Tämä ei kelpaa.')
  }});
