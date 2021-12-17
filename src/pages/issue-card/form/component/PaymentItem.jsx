import React from 'react'

export default React.memo(
  function PaymentItem({ img, label, keys, choosePayment, render }) {
    console.log('render PaymentItem')
    return (
      <div key={keys} className="dropdown__list__item" onClick={() => choosePayment(label, img)}>
        <img src={img} className="paysystem__icon mastercard__icon" alt={label} />
        <p className="form__input">{label}</p>
      </div>
    )
  },
  (prevProps, nextProps) => {
    return nextProps.render === prevProps.render
  }
)
