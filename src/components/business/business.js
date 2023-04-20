import React from 'react';
import styles from './business.module.css';

const business = {
    imageSrc: 'genericEats.png',
    name: 'Generic Eats',
    address: '123 May Dup Place',
    city: 'Hopeulikit',
    state: 'Georgia',
    zipcode: '56266',
    category: 'American',
    rating: 4.0,
    ratingCount: 100,
};

const Business = () => {
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