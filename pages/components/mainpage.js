import Nav from './nav'
import Footer from './footer'

import mainpageStyles from '../../styles/Mainpage.module.css'

const Mainpage = ({ children }) => {
  return (
      <>
      <Nav/>
      <div className={mainpageStyles.container}>
      <main className={mainpageStyles.main}>{children} </main>
        
      </div>
      <Footer />
      </>
   
  )
}

export default Mainpage