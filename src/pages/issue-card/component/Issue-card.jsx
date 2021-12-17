import React from 'react'

import Form from '../form/component/Form'

import '../../../assets/style/Style.scss'
import scene from '../img/icon/scene_2.svg'
import logo from 'assets/icon/global/logo.svg'
import data from 'data/mock/data'
import { Navigate } from 'react-router-dom'

export default function IssueCard({ auth }) {
  console.log('render IssueCard')

  if (!auth) {
    return <Navigate to="/" replace={true} />
  } else {
    return (
      <main>
        <section className="info__section card__create__section">
          <div className="container">
            <img src={logo} className="logo" alt="logo" />
            <div className="card__create__section__wrap">
              <h1 className="title__h1 section__title">Выпуск карты</h1>
              <h2 className="title__h2 section__subtitle">
                Самое время открыть свою первую пластиковую карту в нашем Банке
              </h2>
              <Form
                money={data.money}
                payments={data.payments}
                classPayments={data.classPayments}
              />
              <div style={{ display: 'none' }} data-type="mastercard" className="additional__links">
                <p className="additional__links--remark">
                  Карту класса World Elite мы открывает только по своей инициативе.
                </p>
              </div>
              <div data-type="visa" className="additional__links">
                <p className="additional__links--remark">
                  Карту класса Infinite мы открывает только по своей инициативе.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="decorative__section">
          <img className="decorative__section__img" src={scene} alt="scene" />
        </section>
      </main>
    )
  }
}
