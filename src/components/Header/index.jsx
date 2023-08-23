import styles from './header.module.scss'
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
                    <img src="./img/Frame6.png"/>
                </div>
            </div>
            <div className={styles.nameBlock}>
                <h1 className={styles.subtitle}>Platform for secure storage and inheritance of digital assets</h1>
                <p className={styles.title}>Lorem ipsum dolor sit amet consectetur. Rhoncus tincidunt sapien volutpat</p>
                <button className={styles.headButton}></button>
            </div>

            <img src="./img/155.png" className={styles.backgroundImage}/>
            <img src="./img/Big.png" className={styles.backgroundImageBig}/>
            <img src="./img/Mid.png" className={styles.backgroundImageMid}/>
            <img src="./img/Small.png" className={styles.backgroundImageSmall}/>
        </header>
    )
}

export default Header;
