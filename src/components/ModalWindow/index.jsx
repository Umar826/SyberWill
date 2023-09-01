import styles from './modal.module.scss'
import React from 'react';

const Modale = () => {
    return(
        <div className={styles.block}>
            <div class={styles.clbtn7}></div>
            <h1 className={styles.subtitle}>Need support?</h1>
            <p className={styles.title}>For any question, feedback or request, don't hesitate to contact us. We will answer as soon as possible.</p>
            <div className={styles.buttonBlock}>
                <input type="text" placeholder="Your name" className={styles.email}/>
                <input type="text" placeholder="Your email" className={styles.email}/>
                <input type="text" placeholder="Your masage" className={styles.emailOne}/>
            </div>
            <div className={styles.underBlock}>
                <div className={styles.grid}>
                    <button type="checkbox" className={styles.pointButton} />
                    <p className={styles.underTitle}><a className={styles.span}>privacy policy</a> agreement</p>
                </div>
                <button className={styles.sendInput}>Send</button>
            </div>
        </div>
    )
}

export default Modale;