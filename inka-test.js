const names = ['Inka', 'Valtteri', 'Jasmin', 'Paki', 'Katri', 'Ukemi', 'Mauku', 'Maikkuli', 'Hilipatipippan', 'Make'];
let expectedK = names[3].charAt(2)
let order = names.sort();
let expectedT = order[3].charAt(2)
if (expectedK === 'k' && expectedT === 'b') {
    console.log('yes');
} else {
    console.log('no');
}
