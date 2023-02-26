import React from 'react';

import styles from './Card.module.scss';

function Card({ ticket }) {
  return (
    <li className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.price}>{`${ticket.price} Р`}</span>
        <img
          src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
          alt="logo"
        />
      </div>
      <div className={styles.cardBody}>
        <span>
          {ticket.segments[0].origin}-{ticket.segments[0].destination}
        </span>
        <br />
        <span>{ticket.segments[0].date}</span>
        <br />
        <span>{ticket.segments[0].duration}</span>
      </div>
    </li>
  );
}

export default Card;
