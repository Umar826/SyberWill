import styles from './pricing.module.scss'
import React from 'react';

const Pricing = () => {
    return(
        <section>
            <h1 className={styles.subtytle}>Pricing</h1>
            <div className={styles.flex}>
                <div className={styles.block}>
                    <div className={styles.cyrcle}>
                        <img src="./img/add 1.png" />
                    </div>
                    <h1 className={styles.blockSubtytle}>Additional Service</h1>
                    <div className={styles.line}></div>
                    <p className={styles.title}>Lorem ipsum dolor sit amet<br/> consectetur.</p>
                    <p className={styles.title}>Lorem ipsum dolor sit amet<br/> consectetur. At odio quisque<br/> feugiat lorem eget tincidunt<br/> orci pellentesque.</p>
                    <p className={styles.title}>Lorem ipsum dolor sit amet </p>
                    <h1 className={styles.price}>200 USDT</h1>
                </div>
                <div className={styles.blockOne}>
                    <div className={styles.cyrcle}>
                        <img src="./img/sack.png" />
                    </div>
                    <h1 className={styles.blockSubtytle}>Subscription</h1>
                    <div className={styles.line}></div>
                    <p className={styles.title}>Lorem ipsum dolor sit amet<br/> consectetur.</p>
                    <p className={styles.title}>Lorem ipsum dolor sit amet<br/> consectetur. At odio quisque<br/> feugiat lorem eget tincidunt<br/> orci pellentesque.</p>
                    <p className={styles.title}>Lorem ipsum dolor sit amet </p>
                    <h1 className={styles.price}>300 USDT/month</h1>
                </div>
                <div className={styles.blockBorder}>
                    <div className={styles.cyrcle}>
                        <img src="./img/Frame 93.png" />
                    </div>
                    <h1 className={styles.blockSubtytle}>We are open to offers</h1>
                    <div className={styles.line}></div>
                    <input type="text" placeholder="Your email" className={styles.email}/>
                    <input type="text" placeholder="Describe your idea" className={styles.input}/>
                    <div className={styles.underBlock}>
                        <div className={styles.grid}>
                            <button className={styles.pointButton} />
                            <p className={styles.underTitle}><a className={styles.span}>privacy policy</a> agreement</p>
                        </div>
                        <button className={styles.sendInput}>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;