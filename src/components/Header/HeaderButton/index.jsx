import styles from './headerButton.module.scss'
import React from 'react';

const HeaderButton = () => {
    return(
        <button id="headButton" className={styles.headButton}>
            <h1 className={styles.subtitle}>Get It</h1>
            <div className={styles.flex1}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.flex2}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.flex3}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.flex4}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.flex5}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </button>
    )
}

export default HeaderButton;