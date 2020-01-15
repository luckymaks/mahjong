import React, { useEffect } from 'react';
import { generateCardDeck } from 'src/services/generateArray';
import { rootStore } from 'src/stores/RootModel';
import { CardComponent } from '../CardComponent/CardComponent';
import styles from './ShellComponent.module.scss';

export function ShellComponent() {
  generateCardDeck(14, 50);
  const arrayForComparison = [];
  useEffect(() => {
    rootStore.allShow();
  }, []);
  function comparison(item) {
    item.toggleChange();
    arrayForComparison.push(item);
    if (arrayForComparison.length === 2) {
      rootStore.toggleVisible(true);
      const item1 = arrayForComparison[0];
      const item2 = arrayForComparison[1];
      if (item1.title === item2.title) {
        rootStore.toggleVisible(false);
        arrayForComparison.splice(0, arrayForComparison.length);
        return;
      }
      arrayForComparison.splice(0, arrayForComparison.length);
      setTimeout(() => {
        rootStore.toggleVisible(false);
        item1.toggleChange();
        item2.toggleChange();
      }, 1000);
    }
  }

  return (
    <div className={styles.container}>
      {rootStore.cards.map((item) => {
        return (
          <CardComponent
            key={item.id}
            card={item}
            comparison={comparison}
          />
        );
      })}
    </div>
  );
}
