import styles from './solution.module.scss'
import React from 'react';

const Solution = () => {
    return(
        <section className={styles.solution}>
            <div className={styles.block}>
                <img src="./img/vector (8).png" className={styles.logo}/>
                <h1 className={styles.subtitle}>Solution</h1>
                <p className={styles.title}>Lorem ipsum dolor sit amet consectetur. Rhoncus<br/> tincidunt sapien volutpat</p>
            </div>
        </section>
    )
}

export default Solution;