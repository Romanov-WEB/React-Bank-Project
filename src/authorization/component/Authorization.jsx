import React from 'react'
import '../../assets/style/Style.scss'
import logoSVG from '../img/logo.svg'
import scene from '../img/scene.svg'
import Login from './login'
import Registration from './registration'
import { Navigate } from 'react-router-dom'

const Authorization = ({ auth }) => {
  console.log('render Authorization')

  const [toggleTab, setToggleTab] = React.useState(true)

  const clickOut = (toggle) => {
    setToggleTab(toggle)
  }

  if (auth) {
    return <Navigate to="card" replace={true} />
  } else {
    return (
      <main>
        <section className="info__section log_in__section">
          <div className="container">
            <img src={logoSVG} className="logo" alt="logo" />
            {toggleTab ? <Login clickOut={clickOut} /> : <Registration clickOut={clickOut} />}
          </div>
        </section>
        <section className="decorative__section">
          <img className="decorative__section__img" src={scene} alt="scene" />
        </section>
      </main>
    )
  }
}
export default Authorization
