import { rootStore } from 'src/stores/RootModel';

export function generateCardDeck() {
  const n = 50;

  nextPrimeNumber: for (let i = 2; i <= n; i += 1) {
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) continue nextPrimeNumber;
    }

    rootStore.add(i);
  }

  rootStore.shuffle(rootStore.cards);
}
