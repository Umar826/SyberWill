import styles from './learn.module.scss'
import React from 'react';

const Learn = () => {
    return(
        <section className={styles.learn}>
            <h1 className={styles.subtytle}>Learn</h1>
            <div className={styles.block}>

                <div className={styles.blockOne}>
                    <div className={styles.flex}>
                        <div className={styles.cyrcle}>
                            <img src="./img/Group 494.png" />
                        </div>
                        <img src="./img/Frame 19.png" />
                    </div>
                    <h1 className={styles.title}>Help Desk</h1>
                    <p className={styles.smallTitle}>Lorem ipsum dolor sit amet<br/> consectetur. Rhoncus<br/> tincidunt sapien volutpat</p>
                </div>

                <div className={styles.blockTwo}>
                    <div className={styles.flexOne}>
                        <img src="./img/Frame 19 (1).png" className={styles.adaptiveImage}/>
                        <div className={styles.cyrcle}>
                            <img src="./img/Vector (9).png" />
                        </div>
                        <img src="./img/Frame 19 (1).png" className={styles.adaptiveImageNone}/>
                    </div>
                    <h1 className={styles.title}>Blog FQ</h1>
                    <p className={styles.smallTitle}>Lorem ipsum dolor sit amet<br/> consectetur. Rhoncus<br/> tincidunt sapien volutpat</p>
                </div>

                <div className={styles.blockThree}>
                    <div className={styles.flexTwo}>
                        <div className={styles.cyrcle}>
                            <img src="./img/circle-user (1) (1).png" />
                        </div>
                        <img src="./img/Frame 19 (2).png" />
                    </div>
                    <h1 className={styles.title}>Live Support</h1>
                    <p className={styles.smallTitle}>Lorem ipsum dolor sit amet<br/> consectetur. Rhoncus<br/> tincidunt sapien volutpat</p>
                </div>

            </div>
        </section>
    )
}

export default Learn;