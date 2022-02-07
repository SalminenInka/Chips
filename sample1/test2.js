const bigthings = ['Blue whale', 'Ship', 'Aeroplane', 'Urho'];
let letterEorP = 0;
for (i = 0; i < bigthings.length; i++) { 
    const bigboi = bigthings[i];
    for (j = 0; j < bigboi.length; j++) {
        const letter = bigboi.charAt(j);
        if (letter === 'e' || letter === 'p') letterEorP++;
       // console.log(bigboi.charAt(j))
    }};
 console.log(letterEorP);



const names = ['Inka', 'Valtteri', 'Jasmin', 'Paki', 'Katri', 'Ukemi', 'Mauku', 'Maikkuli', 'Hilipatipippan', 'Make'];
let expectedK = names[3].charAt(2)
let order = names.sort();
let expectedT = order[3].charAt(2)
if (expectedK === 'k' && expectedT === 'b') {
    console.log('yes');
} else {
    console.log('no')
};

const harjoitus1 = function(a, b) {
    return a - b;
}
console.log(harjoitus1(10,7));

// 01010011 binääri desimaaliin
function binToDec(bstr) {
    return parseInt ((bstr + '')
    .replace(/[^01]/gi, ''), 2);
};
console.log(binToDec('01010011'));
