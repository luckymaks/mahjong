import { rootStore } from 'src/stores/RootModel';

export function generateCardDeck(maxLength, maxNumber) {
  const arr = [];
  let rundomnumber;

  while (arr.length <= maxLength) {
    rundomnumber = Math.floor(Math.random() * maxNumber);

    if (arr.indexOf(rundomnumber) === -1) {
      arr.push(rundomnumber);
      rootStore.add(rundomnumber);
    }
  }

  rootStore.shuffle(rootStore.cards);
}
