import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card';

import styles from './CardList.module.scss';

function CardList() {
  const tickets = useSelector((state) => state.tickets.visibleTickets);

  const cards = tickets.map((el) => {
    return <Card key={el.segments[0].date} ticket={el} />;
  });

  return <ul className={styles.cardList}>{cards}</ul>;
}

export default CardList;
