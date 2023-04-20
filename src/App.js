import React from 'react';
import styles from './App.module.css';

import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';

function App() {
  return (
    <div className={styles.App}>
      <h1>Ravenous Search Engine</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
