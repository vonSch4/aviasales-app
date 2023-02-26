import React from 'react';

import styles from './LoaderSpinner.module.scss';

function LoaderSpinner() {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loaderSpinner} />
      <span>Ожидайте загрузку всех билетов...</span>
    </div>
  );
}

export default LoaderSpinner;
