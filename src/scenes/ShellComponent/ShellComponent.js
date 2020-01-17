import React, { useEffect } from 'react';
import { generateCardDeck } from 'src/services/generateArray';
import { rootStore } from 'src/stores/RootModel';
import { CardComponent } from '../CardComponent/CardComponent';
import styles from './ShellComponent.module.scss';

export function ShellComponent() {
  generateCardDeck();
  const arrayForComparison = [];

  useEffect(() => {
    rootStore.allShow();
  }, []);

  function comparison(item) {
    item.toggleChange();
    arrayForComparison.push(item);
    if (arrayForComparison.length === 2) {
      rootStore.toggleVisible(true);
      const [firstCard, secondCard] = arrayForComparison;
      if (firstCard.title === secondCard.title) {
        rootStore.toggleVisible(false);
        arrayForComparison.splice(0, arrayForComparison.length);
        return;
      }
      arrayForComparison.splice(0, arrayForComparison.length);
      setTimeout(() => {
        rootStore.toggleVisible(false);
        firstCard.toggleChange();
        secondCard.toggleChange();
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
