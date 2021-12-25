import Nav from 'common/nav/component/Nav'
import {useEffect} from 'react'
// import Card from '../card/component'
import Header from '../../common/header/component/Header'
import { Navigate } from 'react-router-dom'
import Footer from '../../common/footer/component/Footer'
import DataCard from '../../store/getCard/DataCard'
import tokenLocal from 'data/mock/token'
import Payments from 'pages/payments/component/Payments'

const Wrapper = ({ auth }) => {
  console.log('render Wrapper')

  useEffect( () => {
    const { token } = tokenLocal
    // DataCard.getCard('/cards', token)
    async function getCards() {
      await DataCard.getCard('/cards', token)
    }
    getCards()
  }, [])
  
  if (!auth) {
    return <Navigate to="/" replace={true} />
  } else {
    return (
      <>
        <main className="dashbord dashbord__card">
          <Nav />
          <section className="main__info__section">
            <Header />
            {/*<Card />*/}
             <Payments />
          </section>
        </main>
        <Footer />
      </>
    )
  }
}
export default Wrapper
