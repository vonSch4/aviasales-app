import React from 'react';

import {
  formatDateToTime,
  formatDurationToTime,
  formatTransferDescription,
} from '../../utils';

import styles from './Card.module.scss';

function Card(props) {
  const { ticket } = props;
  const { price, segments, carrier } = ticket;

  const departureTime = formatDateToTime(
    segments[0].date,
    segments[0].duration
  );
  const backTime = formatDateToTime(segments[1].date, segments[1].duration);

  const departureDuration = formatDurationToTime(segments[0].duration);
  const backDuration = formatDurationToTime(segments[1].duration);

  return (
    <li className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.price}>{`${price} Р`}</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardRow}>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>
              {segments[0].origin}-{segments[0].destination}
            </span>
            <span>{departureTime}</span>
          </div>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>В пути</span>
            <span>{departureDuration}</span>
          </div>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>
              {formatTransferDescription(segments[0].stops)}
            </span>
            <span>{segments[0].stops.join(', ')}</span>
          </div>
        </div>
        <div className={styles.cardRow}>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>
              {segments[1].origin}-{segments[1].destination}
            </span>
            <span>{backTime}</span>
          </div>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>В пути</span>
            <span>{backDuration}</span>
          </div>
          <div className={styles.cardCeil}>
            <span className={styles.ceilHeader}>
              {formatTransferDescription(segments[1].stops)}
            </span>
            <span>{segments[1].stops.join(', ')}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
