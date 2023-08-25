import styles from './aboutus.module.scss'
import AboutItem from './AboutItem';
import image1 from '../../itemImg/forward1.png'
import image2 from '../../itemImg/link1.png'
import image3 from '../../itemImg/work-svgrepo-com.png'
import image4 from '../../itemImg/box.png'
import React from 'react';

const aboutData = [
    {
        icon: image1, title: "Company", text: "Lorem ispum dolor sit amet consectetur. Pulvinar", 
    },
    {
        icon: image2, title: "Referal", text: "Lorem ispum dolor sit amet consectetur. Pulvinar", 
    },
    {
        icon: image3, title: "Careers", text: "Lorem ispum dolor sit amet consectetur. Pulvinar", 
    },
    {
        icon: image4, title: "Docs", text: "Lorem ispum dolor sit amet consectetur. Pulvinar", 
    }
]

const About = () => {
    return(
        <section className={styles.aboutUs}>
            <div className={styles.overBlock}>
                <div className={styles.underBlock}>
                    { aboutData.map((item => {
                        return <AboutItem icon={item.icon} title={item.title} text={item.text} />
                    }))}
                </div>
            </div>
            <button className={styles.absoluteButton}>About Us</button>
        </section>
    )
}

export default About;