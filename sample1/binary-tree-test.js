const { BinaryTree } = require('./binary-tree');

const tree = new BinaryTree((v) => v, (a, b) => a - b);
for (let i = 0; i < 10000; i += 1) tree.insert(Math.floor(Math.random() * 10000));
const luku = tree.search(10);
console.log(luku);
