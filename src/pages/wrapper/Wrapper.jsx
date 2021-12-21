import Nav from 'common/nav/component/Nav'
import Card from '../card/component'
import Header from '../../common/header/component/Header'
import { Navigate } from 'react-router-dom'
import Footer from '../../common/footer/component/Footer'
import tokenLocal from 'data/mock/token'
import DataCard from 'store/getCard/DataCard'

const Wrapper = ({ auth }) => {
  console.log('render Wrapper')
  const { token } = tokenLocal
  DataCard.getCard('/cards', token)
  
  if (!auth) {
    return <Navigate to="/" replace={true} />
  } else {
    return (
      <>
        <main className="dashbord dashbord__card">
          <Nav />
          <section className="main__info__section">
            <Header />
            <Card />
          </section>
        </main>
        <Footer />
      </>
    )
  }
}
export default Wrapper
