import styles from './aboutus.module.scss'
import React from 'react';

const About = () => {
    return(
        <section className={styles.aboutUs}>
            <div className={styles.overBlock}>
                <div className={styles.underBlock}>
                    <div className={styles.block}>
                        <div className={styles.cyrcle}>
                            <img src="./img/Forward 1.png" />
                        </div>
                        <h1>Company</h1>
                        <p>Lorem ispum dolor sit amet <br/>consectetur. Pulvinar</p>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.cyrcle}>
                            <img src="./img/link1.png" />
                        </div>
                        <h1>Referal</h1>
                        <p>Lorem ispum dolor sit amet <br/>consectetur. Pulvinar</p>
                    </div>
                </div>
                <div className={styles.underBlock}>
                    <div className={styles.block}>
                        <div className={styles.cyrcle}>
                            <img src="./img/work-svgrepo-com.png" />
                        </div>
                        <h1>Careers</h1>
                        <p>Lorem ispum dolor sit amet <br/>consectetur. Pulvinar</p>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.cyrcle}>
                            <img src="./img/box.png" />
                        </div>
                        <h1>Docs</h1>
                        <p>Lorem ispum dolor sit amet <br/>consectetur. Pulvinar</p>
                    </div>
                </div>
            </div>
            <img src="./img/Frame 20.png" className={styles.absoluteImageOne}/>
            <img src="./img/Frame 21 (1).png" className={styles.absoluteImageTwo}/>
            <img src="./img/Frame 18.png" className={styles.absoluteImageThree}/>
            <img src="./img/polygon 16.png" className={styles.absoluteImageFour}/>
            <img src="./img/polygon 16.png" className={styles.absoluteImageFive}/>
            <img src="./img/polygon 16.png" className={styles.absoluteImageSix}/>
            <button className={styles.absoluteButton}>About Us</button>
        </section>
    )
}

export default About;