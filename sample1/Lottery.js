function lottery() {
  const arr1 = [];
  do {
    const num1 = Math.floor((Math.random() * 20) + 1);
    if (!arr1.includes(num1)) {
      arr1.push(num1);
    }
  } while (arr1.length < 7);
  const arr2 = [];
  do {
    const num2 = Math.floor((Math.random() * 20) + 1);
    if (!arr2.includes(num2) && !arr1.includes(num2)) {
      arr2.push(num2);
    }
  } while (arr2.length < 2);
  const total = `${arr1} and ${arr2}`;
  return total;
}
lottery();
