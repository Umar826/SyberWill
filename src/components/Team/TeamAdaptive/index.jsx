import styles from './teamAdaptive.module.scss'
import React from 'react';

const TeamAdaptive = () => {
    return(
        <div className={styles.block}>
            <div className={styles.underBlock}>
                <img src="./img/Rectangle 127.png" />
                <div className={styles.gap}>
                    <h1 className={styles.subtitle}>Serg Ruden</h1>
                    <h1 className={styles.title}>CEO and Founder</h1>
                    <p className={styles.text}>Serg is an investor and serial entrepreneur. Serg has more than 10 years of experience in international marketing agencies and in the fintech industry. Since 2015, he has been heavily engaged in private investment, development and strategic consulting of projects.</p>
                </div>
            </div>
            <div className={styles.underBlock}>
                <img src="./img/Rectangle 127 (1).png" />
                <div className={styles.gap}>
                    <h1 className={styles.subtitle}>Ramin Mikailov</h1>
                    <h1 className={styles.title}>CBDO and Co-Founder</h1>
                    <p className={styles.text}>Ramin is cybersecurity expert with more than 14 year of experience in many large companies. Since 2016 he has deeply immersed in business development and strategic management a lot of digital projects.</p>
                </div>
            </div>
        </div>
    )
}

export default TeamAdaptive;