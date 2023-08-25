import styles from './pricingForm.module.scss'
import React from 'react';

const PricingForm = () => {
    return(
        <div className={styles.blockBorder}>
            <div className={styles.cyrcle}>
                <img src="./img/Frame 93.png" />
            </div>
            <h1 className={styles.blockSubtytle}>We are open to offers</h1>
            <div className={styles.line}></div>
            <input type="text" placeholder="Your email" className={styles.email}/>
            <input type="text" placeholder="Describe your idea" className={styles.input}/>
            <div className={styles.underBlock}>
                <div className={styles.grid}>
                    <button className={styles.pointButton} />
                    <p className={styles.underTitle}><a className={styles.span}>privacy policy</a> agreement</p>
                </div>
                <button className={styles.sendInput}>Send</button>
            </div>
        </div>
    )
}

export default PricingForm;