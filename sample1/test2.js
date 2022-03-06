function anyScale(temp) {
  let result = '';
  if (temp.includes('C')) {
    result = (`${(temp.replace('C', '')) * (9 / 5) + 32} F`);
  } else if (temp.includes('c')) {
    result = (`${temp.replace('c', '') * (9 / 5) + 32} F`);
  } else if (temp.includes('F')) {
    result = (`${(temp.replace('F', '') - 32) * (5 / 9)} C`);
  } else if (temp.includes('f')) {
    result = (`${(temp.replace('f', '') - 32) * (5 / 9)} C`);
  } else {
    result = 'Only enter numerals followed by F or C.';
  }
  return result;
}
console.log(anyScale('c'));
