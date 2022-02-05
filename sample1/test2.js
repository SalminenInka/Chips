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