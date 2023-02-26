import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as actions from '../../store/actions';
import { SORTING } from '../../store/constants';

import styles from './SortButtons.module.scss';

function SortButtons(props) {
  const {
    sorting,
    setSorting,
    allTickets,
    sortCheapest,
    sortFastest,
    sortOptimal,
  } = props;

  useEffect(() => {
    sortCheapest();
  }, [allTickets.length, sortCheapest]);

  return (
    <ul className={styles.sortButtons}>
      <li>
        <button
          className={classNames(
            styles.button,
            styles.buttonFirst,
            sorting === SORTING.CHEAPEST ? styles.selected : ''
          )}
          type="button"
          onClick={() => {
            setSorting(SORTING.CHEAPEST);
            sortCheapest();
          }}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
      </li>
      <li>
        <button
          className={classNames(
            styles.button,
            sorting === SORTING.FASTEST ? styles.selected : ''
          )}
          type="button"
          onClick={() => {
            setSorting(SORTING.FASTEST);
            sortFastest();
          }}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
      </li>
      <li>
        <button
          className={classNames(
            styles.button,
            styles.buttonLast,
            sorting === SORTING.OPTIMAL ? styles.selected : ''
          )}
          type="button"
          onClick={() => {
            setSorting(SORTING.OPTIMAL);
            sortOptimal();
          }}
        >
          ОПТИМАЛЬНЫЙ
        </button>
      </li>
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    sorting: state.sorting,
    allTickets: state.tickets.allTickets,
  };
}

export default connect(mapStateToProps, actions)(SortButtons);
