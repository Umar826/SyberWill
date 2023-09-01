import styles from './team.module.scss'
import TeamItem from './TeamItem';
import image1 from '../../itemImg/Component 5.png'
import image2 from '../../itemImg/Component 6.png'
import React from 'react';

const teamData = [
    {
        icon: image1, subtitle: "Serg Ruden", title: "CEO and Founder", text: "Serg is an investor and serial entrepreneur. Serg has more than 10 years of experience in international marketing agencies and in the fintech industry. Since 2015, he has been heavily engaged in private investment, development and strategic consulting of projects.", 
    },
    {
        icon: image2, subtitle: "Ramin Mikailov", title: "CBDO and Co-Founder", text: "Ramin is cybersecurity expert with more than 14 year of experience in many large companies. Since 2016 he has deeply immersed in business development and strategic management a lot of digital projects.", 
    },
]

const Team = () => {
    return(
        <section>
            <h1 className={styles.subtytle}>Team</h1>
            <div className={styles.flex}>
                { teamData.map((item => {
                    return <TeamItem icon={item.icon} subtitle={item.subtitle} title={item.title} text={item.text} />
                }))}
            </div>
            <p className={styles.title}>Our team have led and delivered large-scale software and design<br/>
            projects in multiple startups and high-growth environments like CBG, Groupon, Kaspersky Lab and among others</p>
            <img src="./img/black2.png"  className={styles.absoluteImageOne}/>
            <img src="./img/black1.png"  className={styles.absoluteImageTwo}/>
        </section>
    )
}

export default Team;