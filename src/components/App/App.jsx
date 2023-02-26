import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from '../CardList';
import FilterList from '../FilterList';
import SortButtons from '../SortButtons';
import ShowMoreButton from '../ShowMoreButton';
import LoaderSpinner from '../LoaderSpinner';
import NotifyMessage from '../NotifyMessage';
import logo from '../../assets/img/Logo.svg';
import { getSearchId } from '../../store/actions';
import { sortingTickets, filterTickets } from '../../utils';

import styles from './App.module.scss';

function App(props) {
  const {
    getSearchId: getSearchIdAction,
    tickets,
    sorting,
    filters,
    ticketsCount,
    stopLoading,
  } = props;

  const sortedTickets = sortingTickets(sorting, tickets);
  const filteredTickets = filterTickets(filters, sortedTickets);

  useEffect(() => {
    getSearchIdAction();
  }, [getSearchIdAction]);

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="Logo" />
      </header>
      <main className={styles.main}>
        <FilterList />
        <div className={styles.container}>
          <SortButtons />
          {stopLoading || <LoaderSpinner />}
          <CardList tickets={filteredTickets} ticketsCount={ticketsCount} />
          {!!filteredTickets.length && <ShowMoreButton />}
          {!filteredTickets.length && <NotifyMessage />}
        </div>
      </main>
    </>
  );
}

function mapStateToProps(state) {
  return {
    tickets: state.tickets,
    sorting: state.sorting,
    filters: state.filters,
    ticketsCount: state.ticketsCount,
    stopLoading: state.stopLoading,
  };
}

export default connect(mapStateToProps, { getSearchId })(App);
