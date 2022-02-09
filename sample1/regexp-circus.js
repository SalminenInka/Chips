const reBin = /(0|1)+/;
const reDec = /^[0-9]+$/;
const reOct = /^[0-7]+$/;
const reHex = /^[0-9A-F]+$/i;

['10101010', '76987098', '32321321', '878afd', 'DEAD', 'BEEF']
  .forEach((luku) => {
    if (luku.match(reBin)) console.log(`Luku ${luku} voi olla binääri`);
    if (luku.match(reOct)) console.log(`Luku ${luku} voi olla oktaali`);
    if (luku.match(reDec)) console.log(`Luku ${luku} voi olla desimaali`);
    if (luku.match(reHex)) console.log(`Luku ${luku} voi olla hexadesimaali`);
  });

// Nyt alkaa hevi setti. Debuggaa, debuggaa ja kysele tästä.
const patterns = new Map([[2, /^(0|1)+$/], [8, /^[0-7]+$/], [10, /^[0-9]+$/], [16, /^[0-9A-F]+$/i]]);

[
  { radix: 2, luku: '10101010' },
  { radix: 2, luku: '76987098' },
  { radix: 8, luku: '32321321' },
  { radix: 10, luku: '878afd' },
  { radix: 16, luku: 'DEAD' },
  { radix: 2, luku: 'BEEF' },
]
  .forEach((testattava) => {
    const { radix, luku } = testattava;
    const re = patterns.get(radix);
    if (luku.match(re)) console.log(`Value ${luku} matches regex defined for radix ${radix}`);
    else console.log(`Value ${luku} does NOT match regex defined for radix ${radix}`);
  });
