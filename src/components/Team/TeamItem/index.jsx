import styles from './teamItem.module.scss'
import React from 'react';

const TeamItem = ({icon, subtitle, title, text}) => {
    return(
        <div className={styles.grid}>
            <img src={icon} className={styles.image}></img>
            <div className={styles.block}>
                <div className={styles.underBlock}>
                    <h1 className={styles.subtytleLeft}>{subtitle}</h1>
                    <h1 className={styles.subtytleRight}>{title}</h1>
                </div>
                <p className={styles.title}>{text}</p>
            </div>
        </div>
    )
}

export default TeamItem;