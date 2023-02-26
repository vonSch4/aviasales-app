import React from 'react';

import {
  formatDateToTime,
  formatDurationToTime,
  formatTransferDescription,
} from '../../utils';

import styles from './Card.module.scss';

function Card({ ticket }) {
  const departureTime = formatDateToTime(
    ticket.segments[0].date,
    ticket.segments[0].duration
  );
  const backTime = formatDateToTime(
    ticket.segments[1].date,
    ticket.segments[1].duration
  );

  const departureDuration = formatDurationToTime(ticket.segments[0].duration);
  const backDuration = formatDurationToTime(ticket.segments[1].duration);

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
        <div className={styles.cardRow}>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>
              {ticket.segments[0].origin}-{ticket.segments[0].destination}
            </span>
            <span>{departureTime}</span>
          </div>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>В пути</span>
            <span>{departureDuration}</span>
          </div>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>
              {formatTransferDescription(ticket.segments[0].stops)}
            </span>
            <span>{ticket.segments[0].stops.join(', ')}</span>
          </div>
        </div>
        <div className={styles.cardRow}>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>
              {ticket.segments[1].origin}-{ticket.segments[1].destination}
            </span>
            <span>{backTime}</span>
          </div>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>В пути</span>
            <span>{backDuration}</span>
          </div>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>
              {formatTransferDescription(ticket.segments[1].stops)}
            </span>
            <span>{ticket.segments[1].stops.join(', ')}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
