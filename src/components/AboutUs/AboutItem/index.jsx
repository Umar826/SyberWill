import styles from './aboutItem.module.scss'
import React from 'react';

const AboutItem = ({icon, title, text}) => {
    return(
        <div className={styles.block}>
            <div className={styles.cyrcle}>
                <img src={icon} />
            </div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default AboutItem;