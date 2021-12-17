import React from 'react'

import ItemMany from './ItemMany'
import PaymentItem from './PaymentItem'
import ManyHeader from './ManyHeader'
import PaymentHeader from './PaymentHeader'
import ButtonElem from 'common/UI'

import 'assets/style/Style.scss'

export default function Form({ money, payments, classPayments }) {
  console.log('render Form')

  const [toggleMoneys, setToggleMoney] = React.useState(false)
  const [togglePayments, setTogglePayment] = React.useState(false)
  const [checked, setChecked] = React.useState(classPayments)
  const [headerMoney, setHeadersMoney] = React.useState('Доллар')
  const [headerPayment, setHeadersPayment] = React.useState(['Viza', payments[1].payment[0]])

  const openMoneys = toggleMoneys ? 'dropdown dropdown--open' : 'dropdown'
  const openPay = togglePayments ? 'dropdown dropdown--open' : 'dropdown'

  const toggleMoney = () => {
    setToggleMoney(!toggleMoneys)
  }
  const togglePayment = () => {
    setTogglePayment(!togglePayments)
  }
  const chooseMoney = (value) => {
    setHeadersMoney(value)
    toggleMoney()
  }
  const choosePayment = (value, img) => {
    setHeadersPayment([value, img])
    togglePayment()
  }
  function clickChecked(id) {
    const res = []
    checked.map((item) => res.push([item[0], (item[1] = false)]))
    res[id][1] = true
    setChecked(res)
  }

  const elementPayment = payments.map((item, i) => (
    <PaymentItem
      img={item.payment[0]}
      label={item.payment[1]}
      key={`${item},${i}`}
      choosePayment={choosePayment}
      render={togglePayments}
    />
  ))
  const elemMoney = money.map((item, i) => (
    <ItemMany item={item} key={`${item},${i}`} chooseMoney={chooseMoney} render={toggleMoneys} />
  ))
  const buttonElement = checked.map((item, i) => (
    <ButtonElem text={item[0]} i={i} checked={item[1]} clickChecked={clickChecked} key={i} />
  ))

  return (
    <form className="form">
      <label className="form__label" htmlFor="cardType">
        Тип карты
      </label>
      <input className="form__input" type="text" id="cardType" placeholder="Пётр Сметанников" />
      <fieldset>
        <div className="paysystem__block">
          <label className="form__label" htmlFor="paySystem">
            Платёжная система
          </label>
          <div className="form__paysystem paysystem__visa">
            <div className={openPay}>
              <PaymentHeader
                img={headerPayment[1]}
                togglePayment={togglePayment}
                label={headerPayment[0]}
                render={togglePayments}
              />
              <div className="dropdown__list">{elementPayment}</div>
            </div>
          </div>
        </div>
        <div className="currency__block">
          <label className="form__label" htmlFor="currency">
            Валюта
          </label>
          <div className="form__currency form__info">
            <div className={openMoneys}>
              <ManyHeader toggleMany={toggleMoney} label={headerMoney} render={toggleMoneys} />
              <div className="dropdown__list">{elemMoney}</div>
            </div>
          </div>
        </div>
      </fieldset>
      <label className="form__label">Класс карты</label>
      <div id="cordsButton" className="form__select bottom__gap">
        {buttonElement}
      </div>
      <label style={{ marginTop: '40px' }} className="form__label" htmlFor="cardDescr">
        Короткое описание карты
      </label>
      <input className="form__input" type="text" id="cardDescr" placeholder="Личная карта" />

      <label className="form__label form__checkbox" htmlFor="terms">
        <input type="checkbox" id="terms" defaultChecked />
        <span className="checkmark" />Я согласен с положениями Банка
      </label>
      <input
        id="btnRegCard"
        className="form__button form__submit"
        type="submit"
        value="Выпустить карту"
      />
    </form>
  )
}
