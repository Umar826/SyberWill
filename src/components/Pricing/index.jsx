import styles from './pricing.module.scss'
import image1 from '../../itemImg/add 1.png'
import image2 from '../../itemImg/sack.png'
import PricingItem from './PricingItem';
import PricingForm from './PricingForm';
import React from 'react';

const pricingData = [
    {
        icon: image1, subtitle: "Additional Service", 
        title: "Coming soon", price: "200 USDT",
    },
    {
        icon: image2, subtitle: "Subscription", 
        title: "Coming soon", price: "300 USDT/month",
    }
]

const Pricing = () => {
    return(
        <section>
            <h1 className={styles.subtytle}>Pricing</h1>
            <div className={styles.flex}>
                { pricingData.map((item => {
                    return <PricingItem icon={item.icon} subtitle={item.subtitle} title={item.title} price={item.price} />
                }))}
                <PricingForm />
            </div>
        </section>
    )
}

export default Pricing;