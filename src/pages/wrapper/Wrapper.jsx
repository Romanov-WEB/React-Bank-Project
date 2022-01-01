import Nav from 'common/nav/component/Nav'
// import Card from '../card/component'
import Header from '../../common/header/component/Header'
import { Navigate } from 'react-router-dom'
import Footer from '../../common/footer/component/Footer'
import Payments from 'pages/payments/component/Payments'

export default function Wrapper ({ auth }) {
  console.log('render Wrapper')

  if (!auth) {
    return <Navigate to="/" replace={true} />
  } else {
    return (
      <>
        <main className="dashbord dashbord__card">
          <Nav />
          <section className="main__info__section">
            <Header />
            {/* <Card /> */}
             <Payments />
          </section>
        </main>
        <Footer />
      </>
    )
  }
}
