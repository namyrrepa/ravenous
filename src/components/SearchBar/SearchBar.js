import React from 'react';
import styles from './SearchBar.module.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};

function SearchBar() {
    function renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortOption => {
            let optionChosen = sortByOptions[sortOption];
            return <li key={optionChosen}>{sortOption}</li>;
        });
    };

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SortOptions}>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className={styles.InputFields}>
                <input placeholder='Search Businesses'/>
                <input placeholder='Location' />                
            </div>
            <div className={styles.SubmitSearch}>
                <button>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
