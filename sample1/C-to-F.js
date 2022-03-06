function anyTemp(temp) {
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
anyTemp();

function anyVolume(volume) {
  let result = '';
  if (volume.includes('dl')) {
    result = `${volume.replace('dl', '') * 0.42268} cups`;
  } else if (volume.includes('cups')) {
    result = `${volume.replace('cups', '') * 2.36588237} dl`;
  } else if (volume.includes('cup')) {
    result = `${volume.replace('cup', '') * 2.36588237} dl`;
  } else if (volume.includes('gallons')) {
    result = `${volume.replace('gallons', '') * 3.78541178} L`;
  } else if (volume.includes('gallon')) {
    result = `${volume.replace('gallon', '') * 3.78541178} L`;
  } else if (volume.includes('l')) {
    result = `${volume.replace('l', '') * 0.264172052} Gallons`;
  } else {
    result = 'Only enter numerals followed by the lowercase unit.';
  }
  return result;
}
anyVolume('5 l');

function anyDimension(dimension) {
  let result = '';
  if (dimension.includes('cm')) {
    result = `${dimension.replace('cm', '') * 0.393700787} inches`;
  } else if (dimension.includes('inches')) {
    result = `${dimension.replace('inches', '') / 2.54} cm`;
  } else if (dimension.includes('inch')) {
    result = `${dimension.replace('inch', '') / 2.54} cm`;
  } else if (dimension.includes('km')) {
    result = `${dimension.replace('km', '') * 0.621371192} mile`;
  } else if (dimension.includes('miles')) {
    result = `${dimension.replace('miles', '') * 1.609344} km`;
  } else if (dimension.includes('mile')) {
    result = `${dimension.replace('mile', '') * 1.609344} km`;
  } else if (dimension.includes('m')) {
    result = `${dimension.replace('m', '') * 3.2808399} ft`;
  } else if (dimension.includes('ft')) {
    result = `${dimension.replace('ft', '') * 0.3048} m`;
  } else {
    result = 'Only enter numerals followed by the lowercase unit.';
  }
  return result;
}
anyDimension('1 ft');
