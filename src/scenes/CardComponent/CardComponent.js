import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { rootStore } from 'src/stores/RootModel';
import styles from './CardComponent.module.scss';

export const CardComponent = observer(({ card, comparison }) => {
  const cx = classNames.bind(styles);
  const className = cx({
    container: true,
    isShow: card.isOpen,
    isDisabled: card.isOpen || rootStore.isVisible,
  });
  return (
    <button
      disabled={card.isOpen || rootStore.isVisible}
      className={className}
      onClick={() => comparison(card)}
    >
      {card.isOpen ? card.title : null}
    </button>
  );
});

CardComponent.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.number,
    isOpen: PropTypes.bool,
  }),
  comparison: PropTypes.func,
};
