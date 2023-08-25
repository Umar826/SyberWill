import styles from './contacts.module.scss'
import React from 'react';

const Contacts = () => {
    return(
        <section>
            <h1 className={styles.subtytle}>Contacts</h1>
            <div className={styles.flex}>
                <a href='#'><button className={styles.flexButton}>Email <img src='./img/envelope.png' /></button></a>
                <a href='#'><button className={styles.flexButton}>Telegram <img src='./img/envelope (1).png' /></button></a>
                <a href='#'><button className={styles.flexButton}>Twitter <img src='./img/envelope (2).png' /></button></a>
                <a href='#'><button className={styles.flexButton}>Discord <img src='./img/envelope (3).png' /></button></a>
            </div>
        </section>
    )
}

export default Contacts;