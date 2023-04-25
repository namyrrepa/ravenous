import React from 'react';
import styles from './BusinessList.module.css';

import Business from '../Business/Business.js';

function BusinessList({businesses}) {
    return (
        <div className={styles.BusinessList}>
            {businesses.map((business) => {
                return (
                    <div className={styles.BusinessList}>
                        <Business business={business} key={business.name} />
                    </div>
                    )
                })
            }
        </div>
    );
};

export default BusinessList;