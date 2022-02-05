// First define grand total variable and initialize to zero
let vowelCount = 0;
// Define a set with all vowels
const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'å', 'ä', 'ö']);
// These are things we iterate over
['Blue whale', 'Ship', 'Aeroplane', 'Urho']
  .forEach((thing) => { // for each element in "things"
    /*
    Create an array or characters in string denoted by iteration variable thing
    and increment vowelcount accordingly
    note how chars are converted to lowercase because our vowels only contains
    lowercase letters and we want to count upper case vowels too.
    Also notice use of Elvis-operator ?: (kind of compact if-else statement)
    */
    [...thing].forEach((ch) => { vowelCount += vowels.has(ch.toLowerCase()) ? 1 : 0; });
  });
// eslint-disable-next-line no-console
console.log(vowelCount);
