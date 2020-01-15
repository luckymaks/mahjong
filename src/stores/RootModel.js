import { types } from 'mobx-state-tree';
import uuid from 'uuid/v4';
import { CardModel } from './Cards/CardModel';

const RootModel = types
  .model('RootModel', {
    cards: types.array(CardModel),
    isVisible: types.optional(types.boolean, false),
  })
  .actions((store) => ({
    add(title) {
      const card1 = {
        id: uuid(),
        title,
      };
      const card2 = {
        id: uuid(),
        title,
      };
      store.cards.push(card1, card2);
    },
    shuffle() {
      let j = '';
      let temp = '';
      for (let i = store.cards.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = { id: uuid(), ...store.cards[j] };
        store.cards[j] = { id: uuid(), ...store.cards[i] };
        store.cards[i] = temp;
      }
    },
    allShow() {
      setTimeout(() => {
        store.cards.forEach((item) => item.toggleChange());
      }, 5000);
    },
    toggleVisible(val) {
      store.isVisible = val;
    }
  }));

export const rootStore = RootModel.create({});
