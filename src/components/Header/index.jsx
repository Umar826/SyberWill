import styles from './header.module.scss'
import HeaderButton from './HeaderButton';
import React from 'react';

const Header = () => {
    return(
        <header>
            <div className={styles.block}>
                <div className={styles.gap}>
                    <div className={styles.images}>
                        <img src="./img/Rectangle1.png" className={styles.image}></img>
                        <img src="./img/Vector(7).png"></img>
                    </div>
                    <p className={styles.whiteTitle}>Cyber Will</p>
                </div>
                <div className={styles.bottom_block}>
                    <button className={styles.button}>Log In</button>
                    <button className={styles.button}>Sign In</button>
                    
                </div>
            </div>
            <div className={styles.nameBlock}>
                <h1 className={styles.subtitle}>Platform for secure storage and inheritance of digital assets</h1>
                <p className={styles.title}>Our Mission is to guarantee a secure transfer of your wealth to the heirs</p>
                <HeaderButton />
            </div>

            
            <div className={styles.backgroundImageBig}>
            <div class="corner left"></div>
            <div class="corner right"></div>
            </div>
            <div className={styles.backgroundImageMid}>
            <div class="corner left"></div>
            <div class="corner right"></div>
            </div>
            <div className={styles.backgroundImageBig}>
            <div class="corner left"></div>
            <div class="corner right"></div>
            </div>
            <img src="./img/155.png" className={styles.backgroundImage}/>
            <img src="./img/Small.png" className={styles.backgroundImageSmall}/>
        </header>
    )
}

export default Header;
