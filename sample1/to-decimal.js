/* eslint-disable no-plusplus */
const radixToRegex = new Map([[2, /^(0|1)+$/], [8, /^[0-7]+$/], [10, /^[0-9]+$/], [16, /^[0-9A-F]+$/i]]);

function toDecimal(str, radix) {
  const regex = radixToRegex.get(radix);
  // if no value is found, the radix must be wrong
  if (!regex) throw new Error(`Radix ${radix} is not supported`);
  if (!str.match(regex)) throw new Error(`Value ${str} is not valid value with radix ${radix}`);
  let dec = 0;
  for (let i = str.length - 1, exp = 0; i >= 0; i--) {
    // dec = dec + parse ith char to int and multiply it by radix pow exp
    dec += parseInt(str.charAt(i), radix) * radix ** exp++;
    // exp is now increment by one
  }
  return dec;
}

// Export the toDecimal function from this module
module.exports.toDecimal = toDecimal;
