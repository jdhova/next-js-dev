 import Head from 'next/head'
import Image from 'next/image'
 import styles from '../styles/Home.module.css';


// ## 1. Aayushi shah-N01523081 and

// ## 2. Jude Okagu -N01407704

export default function Home() {
  return (
    <div className='container'>
    <div className={styles.home}>
        {/* This helps with SCO and crawlers */}
      <Head >
        <title> Resturant Website </title>
        
        <meta name='food'decription="Best resturant in town" />
      </Head>
        <h1 className='text-center'>AUTHENTIC TRADITIONAL AND MODERN INDIAN CUISINE IN TORONTO</h1>
        <p className='text-center'>
          We serve the best authentic, traditional and modern Indian cuisine 
        in Toronto. We have  also got the largest collection of cuisines in the country.
        </p>
        <h4 className='text-danger text-center'>
          Indian food is world-renowned for its tantalising 
        flavours, spiciness and enormous variety. Many of the spices we now take for granted pepper, 
        cardamom and turmeric hail from Indias plains and jungles. The flavour of each Indian dish 
        is a carefully judged balance of herbs, seasonings and spices, and each cook carefully 
        maintains their own recipe for garam masala literally hot mix.
        </h4>
        </div>
    </div>
   
  )
}


