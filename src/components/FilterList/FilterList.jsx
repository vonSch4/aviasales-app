import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../../store/actions';
import { FILTERS } from '../../store/constants';

import styles from './FilterList.module.scss';

function FilterList(props) {
  const { filter, setFilter: setFilterActions } = props;

  return (
    <form className={styles.filterList}>
      <h1 className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h1>
      <label className={styles.inputLabel}>
        <input
          type="checkbox"
          onChange={(e) => {
            setFilterActions(FILTERS.ALL, e.target.checked);
          }}
          checked={filter.includes(FILTERS.ALL)}
        />
        <span>Все</span>
      </label>
      <label className={styles.inputLabel}>
        <input
          type="checkbox"
          onChange={(e) => {
            setFilterActions(FILTERS.WITHOUT_TRANSFERS, e.target.checked);
          }}
          checked={filter.includes(FILTERS.WITHOUT_TRANSFERS)}
        />
        <span>Без пересадок</span>
      </label>
      <label className={styles.inputLabel}>
        <input
          type="checkbox"
          onChange={(e) => {
            setFilterActions(FILTERS.ONE_TRANSFER, e.target.checked);
          }}
          checked={filter.includes(FILTERS.ONE_TRANSFER)}
        />
        <span>1 пересадка</span>
      </label>
      <label className={styles.inputLabel}>
        <input
          type="checkbox"
          onChange={(e) => {
            setFilterActions(FILTERS.TWO_TRANSFERS, e.target.checked);
          }}
          checked={filter.includes(FILTERS.TWO_TRANSFERS)}
        />
        <span>2 пересадки</span>
      </label>
      <label className={styles.inputLabel}>
        <input
          type="checkbox"
          onChange={(e) => {
            setFilterActions(FILTERS.THREE_TRANSFERS, e.target.checked);
          }}
          checked={filter.includes(FILTERS.THREE_TRANSFERS)}
        />
        <span>3 пересадки</span>
      </label>
    </form>
  );
}

function mapStateToProps(state) {
  return {
    filter: state.filters,
  };
}

export default connect(mapStateToProps, { setFilter })(FilterList);
