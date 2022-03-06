/* eslint-disable max-classes-per-file */
/* eslint-disable no-lonely-if */
class Node {
  #keyExtractor;
  #comparator;
  #key;
  #value;
  #left;
  #right;

  constructor(keyExtractor, comparator, value) {
    this.#keyExtractor = keyExtractor;
    this.#comparator = comparator;
    this.#value = value;
    this.#key = this.#keyExtractor(value);
  }

  search(key) {
    const diff = this.#comparator(this.#key, key);
    if (diff === 0) return this.#value;
    if (diff < 0) return this.#left.search(key);
    return this.#right.search(key);
  }

  insert(value) {
    const key = this.#keyExtractor(value);
    const diff = this.#comparator(this.#key, key);
    if (diff <= 0) {
      if (this.#left) this.#left.insert(value);
      else this.#left = new Node(this.#keyExtractor, this.#comparator, value);
    } else {
      if (this.#right) this.#right.insert(value);
      else this.#right = new Node(this.#keyExtractor, this.#comparator, value);
    }
  }
}

class BinaryTree {
  #root;
  #keyExtractor;
  #comparator;

  constructor(keyExtractor, comparator) {
    this.#comparator = comparator;
    this.#keyExtractor = keyExtractor;
  }

  insert(value) {
    if (!this.#root) this.#root = new Node(this.#keyExtractor, this.#comparator, value);
    else this.#root.insert(value);
  }

  search(key) {
    const root = this.#root;
    return root ? root.search(key) : null;
  }
}

module.exports.BinaryTree = BinaryTree;
