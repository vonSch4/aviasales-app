import React from 'react';

import styles from './NotifyMessage.module.scss';

function NotifyMessage() {
  return (
    <span className={styles.notifyMessage}>
      Извините, по заданным параметрам билеты не найдены.
    </span>
  );
}

export default NotifyMessage;
