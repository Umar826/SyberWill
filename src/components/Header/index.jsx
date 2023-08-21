import styles from './header.module.scss'
import React from 'react';

const Header = () => {
    return(
        <header>
            <div className={styles.header_block}>
                <div className={styles.header_gap}>
                    <div className={styles.header_images}>
                        <img src="./img/Rectangle1.png" className={styles.inner_image}></img>
                        <img src="./img/Vector(7).png"></img>
                    </div>
                    <p className={styles.color_white}>Cyber Will</p>
                </div>
                <div className={styles.header_block_2}>
                    <button className={styles.header_button}>Log In</button>
                    <button className={styles.header_button}>Sign In</button>
                    <img src="./img/Frame6.png"/>
                </div>
            </div>
            <div className={styles.nameHeaderBlock}>
                <h1 className={styles.headBigText}>Platform for secure storage and inheritance of digital assets</h1>
                <p className={styles.headSmallText}>Lorem ipsum dolor sit amet consectetur. Rhoncus tincidunt sapien volutpat</p>
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
