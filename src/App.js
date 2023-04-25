import React from 'react';
import styles from './App.module.css';

import LOgnionImage from './Images/LOgnion.png';
import BigBurgerImage from './Images/BigBurger.jpg';
import TheNoodleBarImage from './Images/TheNoodleBar.png';

import SearchBar from './components/SearchBar/SearchBar.js';
import BusinessList from './components/BusinessList/BusinessList.js';

const businesses = [
  {
      imageSrc: LOgnionImage,
      name: "L'Ognion",
      address: '123 May Dup Place',
      city: 'Boise',
      state: 'Idaho',
      zipcode: '56266',
      category: 'French',
      rating: 4.0,
      ratingCount: 100,
  },
  {
      imageSrc: BigBurgerImage,
      name: 'Big Burger',
      address: '500 Calorie Drive',
      city: 'Dallas',
      state: 'Texas',
      zipcode: '28784',
      category: 'American',
      rating: 4.2,
      ratingCount: 150,
  },
  {
      imageSrc: TheNoodleBarImage,
      name: 'The Noodle Bar',
      address: '35 Wok Way',
      city: 'New York',
      state: 'New York',
      zipcode: '96933',
      category: 'Chinese',
      rating: 4.8,
      ratingCount: 225,
  }
];

function App() {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
};

export default App;