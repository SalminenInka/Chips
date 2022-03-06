/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
class Rod {
  #array = [];
  #available;

  constructor(startRod = false) {
    this.#available = !startRod;
  }

  pushDeck(deck) {
    this.#array.push(deck);
  }

  popDeck() {
    const deck = this.#array.pop();
    if (!this.#available && this.isEmpty) this.#available = true;
    return deck;
  }

  get isEmpty() {
    return this.#array.length === 0;
  }

  peekDeck() {
    return this.#array.at(-1);
  }

  conditionalPushDeck(deck) {
    if (this.isEmpty) {
      this.pushDeck(deck);
      return true;
    }
    if (this.peekDeck().size > deck.size) {
      this.pushDeck(deck);
      return true;
    }
    return false;
  }

  get available() {
    return this.#available;
  }

  get decks() {
    return this.#array;
  }
}

class Deck {
  #size;

  constructor(size) {
    this.#size = size;
  }

  get size() {
    return this.#size;
  }
}

const n = 3;
const rod1 = new Rod(true);
const rod2 = new Rod();
const rod3 = new Rod();
// Fill in ROD 1
for (let i = n; i > 0; i -= 1) rod1.pushDeck(new Deck(i));

// eslint-disable-next-line no-constant-condition
while (true) {
  if (rod1.isEmpty) break;
  if (rod1.available) {
    ;
  } else {
    const deck = rod1.popDeck();
    if (!rod2.conditionalPushDeck(deck)) {
      rod3.conditionalPushDeck(deck);
    }
  }
}

console.log('Deck 1');
rod1.decks.forEach((deck) => console.log(deck.size));
console.log('Deck 2');
rod2.decks.forEach((deck) => console.log(deck.size));
console.log('Deck 3');
rod3.decks.forEach((deck) => console.log(deck.size));
