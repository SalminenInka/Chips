const reBin = /^(0|1)+$/;
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
