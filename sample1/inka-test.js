function f(num) {
  const timestamp = new Date();
  if (num === 0) {
    return 1;
  }
  return num * f(num - 1);
}
f(5);
