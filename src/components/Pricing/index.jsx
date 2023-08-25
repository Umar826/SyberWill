import styles from './pricing.module.scss'
import image1 from '../../itemImg/add 1.png'
import image2 from '../../itemImg/sack.png'
import PricingItem from './PricingItem';
import PricingForm from './PricingForm';
import React from 'react';

const pricingData = [
    {
        icon: image1, subtitle: "Additional Service", 
        title1: "Lorem ipsum dolor sit amet consectetur.", title2: "Lorem ipsum dolor sit amet consectetur. At odio quisque feugiat lorem eget tincidunt orci pellentesque.", 
        title3: "Lorem ipsum dolor sit amet ", price: "200 USDT",
    },
    {
        icon: image2, subtitle: "Subscription", 
        title1: "Lorem ipsum dolor sit amet consectetur.", title2: "Lorem ipsum dolor sit amet consectetur. At odio quisque feugiat lorem eget tincidunt orci pellentesque.", 
        title3: "Lorem ipsum dolor sit amet ", price: "300 USDT/month",
    }
]

const Pricing = () => {
    return(
        <section>
            <h1 className={styles.subtytle}>Pricing</h1>
            <div className={styles.flex}>
                { pricingData.map((item => {
                    return <PricingItem icon={item.icon} subtitle={item.subtitle} title1={item.title1} title2={item.title2} title3={item.title3} price={item.price} />
                }))}
                <PricingForm />
            </div>
        </section>
    )
}

export default Pricing;