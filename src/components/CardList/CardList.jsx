import React from 'react';

import Card from '../Card';

import styles from './CardList.module.scss';

function CardList(props) {
  const { tickets, ticketsCount } = props;

  const cards = tickets
    .map((ticket) => {
      return <Card key={ticket.segments[0].date} ticket={ticket} />;
    })
    .slice(0, ticketsCount);

  return <ul className={styles.cardList}>{cards}</ul>;
}

export default CardList;
