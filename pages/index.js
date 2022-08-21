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
      <h1 className='text-center'>GIFTS DELIGHT AUTHENTIC TRADITIONAL AND MODERN <br></br>NIGERIAN CUISINE IN LAGOS.</h1>
      <p className='text-center'>
          We serve the best authentic, traditional and modern Nigerian cuisine 
        in Toronto. We have  also got the largest collection of cuisines in the country.
        </p>
        <h4 className='text-danger text-center'>
        Naija Cuisines Restaurant is a full service restaurant specializing in authentic West African cuisines. For more than 3 years we have earned a reputation of serving appetizing lunch and dinner, each carefully prepared to give you the rich taste of popular African dishes.

        We invite you to experience the wonderful taste of African cuisines, from the spicy and tasty, to the downright mind-blowing. It’s all here at Naija cuisines..
        </h4>
        </div>
    </div>
   
  )
}


