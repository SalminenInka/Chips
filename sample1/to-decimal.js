/* eslint-disable no-console */
/* eslint-disable no-plusplus */
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
  { str: '010101', radix: 2 },
  { str: '11111111', radix: 2 },
  { str: '199', radix: 16 },
  { str: '100', radix: 8 },
  { str: '100', radix: 10 },
  { str: 'DEAD', radix: 16 },
  { str: 'BABE', radix: 16 },
  { str: 'CAFE', radix: 16 },
]
  .forEach((test) => {
    const asDecimal = toDecimal(test.str, test.radix);
    console.log(asDecimal);
  });
