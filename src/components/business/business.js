import React from 'react';
import styles from './Business.module.css';

import GenericEatsImage from './GenericEats.png';
import BigBurgerImage from './BigBurger.jpg';
import TheNoodleBarImage from './TheNoodleBar.png';

const business = [
    {
        imageSrc: GenericEatsImage,
        name: 'Generic Eats',
        address: '123 May Dup Place',
        city: 'Hopeulikit',
        state: 'Georgia',
        zipcode: '56266',
        category: 'American',
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

function Business() {
    return (
    <div className={styles.Business}>
        <div className={styles.imageBox}>
            <img src={business.imageSrc} alt={business.name}/>
        </div>
        <h1>{business.name}</h1>
        <div className={styles.BusinessInfo}>
            <div className={styles.BusinessAddress}>
                <p>{business.address}</p>
                <p>{business.city}</p>
                <p>{`${business.state} ${business.zipcode}`}</p>
            </div>
            <div className={styles.BusinessRatings}>
                <h2>{business.category.toUpperCase()}</h2>
                <h3>{business.rating}</h3>
                <p>{business.ratingCount}</p>
            </div>
        </div>
    </div>
    );
};

export default Business;
