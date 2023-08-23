import styles from './footer.module.scss'
import React from 'react';

const Footer = () => {
    return(
        <footer>
            <div className={styles.block}>
                <div className={styles.flex}>
                    <div className={styles.images}>
                        <img src="./img/Rectangle1.png" className={styles.image}></img>
                        <img src="./img/Vector(7).png"></img>
                    </div>
                    <h1 className={styles.subtitle}>Cyber Will</h1>
                </div>
                <p className={styles.title}>All rights reserved</p>
                <p className={styles.title}>Privacy Policy</p>
                <div className={styles.flex}>
                    <button className={styles.button}>Log In</button>
                    <button className={styles.button}>Sign In</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;