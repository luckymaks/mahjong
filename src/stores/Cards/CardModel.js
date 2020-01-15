import { types } from 'mobx-state-tree';

export const CardModel = types
  .model('CardModel', {
    id: types.string,
    title: types.number,
    isOpen: types.optional(types.boolean, true),
  })
  .actions((store) => ({
    toggleChange() {
      store.isOpen = !store.isOpen;
    },
  }));
