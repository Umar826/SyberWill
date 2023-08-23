import styles from './team.module.scss'
import React from 'react';

const Team = () => {
    return(
        <section>
            <h1 className={styles.subtytle}>Team</h1>
            <div className={styles.flex}>
                <div className={styles.grid}>
                    <img src='./img/Component 5.png' className={styles.image}></img>
                    <div className={styles.block}>
                        <div className={styles.underBlock}>
                            <h1 className={styles.subtytleLeft}>Serg Ruden</h1>
                            <h1 className={styles.subtytleRight}>CEO and Founder</h1>
                        </div>
                        <p className={styles.title}>Serg is an investor and serial entrepreneur. Serg has more than <br/>10 years of experience in international marketing agencies and<br/> in the fintech industry. Since 2015, he has been heavily<br/> engaged in private investment, development and strategic<br/> consulting of projects.</p>
                    </div>
                </div>
                <div className={styles.grid}>
                    <img src='./img/Component 6.png' className={styles.image}></img>
                    <div className={styles.block}>
                        <div className={styles.underBlock}>
                            <h1 className={styles.subtytleLeft}>Ramin Mikailov</h1>
                            <h1 className={styles.subtytleRight}>CBDO and Co-Founder</h1>
                        </div>
                        <p className={styles.title}>Ramin is cybersecurity expert with more than 14 year of<br/> experience in many large companies. Since 2016 he has<br/> deeply immersed in business development and strategic<br/> management a lot of digital projects.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;