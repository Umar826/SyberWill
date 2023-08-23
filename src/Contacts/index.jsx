import styles from './contacts.module.scss'
import React from 'react';

const Contacts = () => {
    return(
        <section>
            <h1 className={styles.subtytle}>Contacts</h1>
            <div className={styles.flex}>
                <button><div className={styles.flexButton}>Email <img src='./img/envelope.png'></img></div></button>
            </div>
        </section>
    )
}

export default Contacts;