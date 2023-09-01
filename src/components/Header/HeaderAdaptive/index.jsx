import styles from './headerAdaptive.module.scss'
import React from 'react';

const HeaderAdaptive = () => {
    return(
        <section>
            <div className={styles.block}>
                <div className={styles.grid}>
                    <div className={styles.flex}>
                        <div className={styles.images}>
                            <img src="./img/Rectangle1.png" className={styles.image}></img>
                            <img src="./img/Vector(7).png"></img>
                        </div>
                        <p className={styles.whiteTitle}>Cyber Will</p>
                    </div>
                    <h1 className={styles.subtitle}>Platform for secure<br/> storage and inheritance<br/> of digital assets</h1>
                    <p className={styles.title}>Our Mission is to guarantee a secure transfer<br/> of your wealth to the heirs</p>
                    <div className={styles.bottom_block}>
                        <button className={styles.button}>Log In</button>
                        <button className={styles.button}>Sign In</button>
                    </div>
                    <button className={styles.headButton}>
                        <p className={styles.buttonTitle}>Get It</p>
                        <div className={styles.dots}>
                            <div className={styles.dot}></div>
                            <div className={styles.dot}></div>
                            <div className={styles.dot}></div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeaderAdaptive;