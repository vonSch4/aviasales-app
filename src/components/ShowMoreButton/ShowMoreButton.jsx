import React from 'react';
import { connect } from 'react-redux';

import { addTicketsCount } from '../../store/actions';

import styles from './ShowMoreButton.module.scss';

function ShowMoreButton(props) {
  const { addTicketsCount: addticketsCountAction } = props;

  return (
    <button
      className={styles.showMoreButton}
      onClick={addticketsCountAction}
      type="button"
    >
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  );
}

export default connect(null, { addTicketsCount })(ShowMoreButton);
