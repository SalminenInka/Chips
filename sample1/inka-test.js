const reBin = /(0|1)+/;
const reDec = /^[0-9]+$/;
const reOct = /^[0-7]+$/;
const reHex = /^[0-9A-F]+$/i;

['10101010', '76987098', '32321321', '878afd', 'DEAD', 'A7H8K', 'BEEF', ]
  .forEach((luku) => {
    try {
    if (luku.match(reBin)) console.log(`Luku ${luku} voi olla binääri`);
    if (luku.match(reOct)) console.log(`Luku ${luku} voi olla oktaali`);
    if (luku.match(reDec)) console.log(`Luku ${luku} voi olla desimaali`);
    if (luku.match(reHex)) console.log(`Luku ${luku} voi olla hexadesimaali`);
   else {
     throw new Error(LukuError)
    }
  } catch(error) { 
    console.log('Luku ' + luku + ' ei ole kelvollinen luku, keksi muuta.' )
  }});

const patterns = new Map([[2, /^(0|1)+$/], [8, /^[0-7]+$/], [10, /^[0-9]+$/], [16, /^[0-9A-F]+$/i]]);

[
  { radix: 2, luku: '10101010' },
  { radix: 2, luku: '76987098' },
  { radix: 8, luku: '32321321' },
  { radix: 10, luku: '878afd' },
  { radix: 16, luku: 'DEAD' },
  { radix: 2, luku: 'A7H8K' }, // odotettavissa kaksi kantalukuunsa sopimationta
]
  .forEach((testattava) => {
    const { radix, luku } = testattava;
    const re = patterns.get(radix);
    try {
    if (luku.match(re)) console.log(Luku + ' sopii yhteen kantaluvun ' + radix + ' kanssa.');
    else {
      throw new Error(RadixError)
    }} catch(error) {
      console.log('Radix ei sovi lukuun')
    }
  });
