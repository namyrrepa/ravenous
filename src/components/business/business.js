import React from 'react';

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
    <div>
        <div>
            <img src={business.imageSrc} alt={business.name} />
        </div>
        <h2>{business.name}</h2>
        <div>
            <p>{business.address}</p>
            <p>{`${business.city}, ${business.state} ${business.zipcode}`}</p>
        </div>
        <div>
            <h3>{business.category}</h3>
            <h3>{business.rating}</h3>
            <p>{business.ratingCount}</p>
        </div>
    </div>
    );
};

export default Business;