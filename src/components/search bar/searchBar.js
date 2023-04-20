import React from 'react';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
};

const SearchBar = () => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortOption => {
            let optionChosen = sortByOptions[sortOption];
            return <li key={optionChosen}>{sortOption}</li>;
        });
    };

    return (
        <div>
            <div>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div>
                <input placeholder='Search Businesses'/>
                <input placeholder='Location' />                
            </div>
            <div>
                <button>
                    <a>'Search'</a>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;