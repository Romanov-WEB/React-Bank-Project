import PaymentHeader from 'pages/issue-card/form/component/PaymentHeader';
import PaymentItem from 'pages/issue-card/form/component/PaymentItem';
import React from 'react'

export default function CardSelection( {payments} ) {
  console.log('Render CardSelection');

  const [headerPayment, setHeadersPayment] = React.useState(['Viza', payments[1].payment[0]])
  const [togglePayments, setTogglePayment] = React.useState(false)

  const openPay = togglePayments ? 'dropdown dropdown--open' : 'dropdown'

  const togglePayment = () => {
    setTogglePayment(!togglePayments)
  }
  const choosePayment = (value, img) => {
    setHeadersPayment([value, img])
    togglePayment()
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
  
  return (
    <div className="paysystem__block">
      <label className="form__label w-260" htmlFor="paySystem">
        Выбор карты
      </label>
      <div className="form__paysystem paysystem__visa w-260">
        <div className={openPay}>
          <PaymentHeader 
            img={headerPayment[1]}
            togglePayment={togglePayment}
            label={headerPayment[0]}
            render={togglePayments}
          />
          <div className="dropdown__list">
            {elementPayment}
          </div>
        </div>
      </div>
    </div>
  )
}
