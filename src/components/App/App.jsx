import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CardList from '../CardList';
import FilterList from '../FilterList';
import SortButtons from '../SortButtons';
import logo from '../../assets/img/Logo.svg';
import { getSearchId } from '../../store/actions';

import styles from './App.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </header>
      <main className={styles.main}>
        <FilterList />
        <div className={styles.container}>
          <SortButtons />
          <CardList />
        </div>
      </main>
    </>
  );
}

export default App;
