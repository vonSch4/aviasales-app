import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { setSorting } from '../../store/actions';
import { SORTING } from '../../store/constants';

import styles from './SortButtons.module.scss';

function SortButtons(props) {
  const { sorting, setSorting: setSortingAction } = props;

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
            setSortingAction(SORTING.CHEAPEST);
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
            setSortingAction(SORTING.FASTEST);
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
            setSortingAction(SORTING.OPTIMAL);
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
  };
}

export default connect(mapStateToProps, { setSorting })(SortButtons);
