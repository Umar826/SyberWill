import styles from './pricingItem.module.scss'
import React from 'react';

const PricingItem = ({icon, subtitle, title, price}) => {
    return(
        <div className={styles.block}>
            <div className={styles.cyrcle}>
                <img src={icon} />
            </div>
            <h1 className={styles.blockSubtytle}>{subtitle}</h1>
            <div className={styles.line}></div>
            <p className={styles.title}>{title}</p>
            <h1 className={styles.price}>{price}</h1>
        </div>
    )
}

export default PricingItem;