import React from 'react'

import arrBottom from 'assets/icon/global/arr-bottom.svg'

export default React.memo(
  function PaymentHeader({ img, togglePayment, label, render }) {
    console.log('render PaymentHeader')
    return (
      <div className="dropdown__toggle" onClick={togglePayment}>
        <img src={img} className="paysystem__icon visa__icon" alt={label} />
        <input className="form__input" type="text" id="paySystem" readOnly value={label} />
        <img src={arrBottom} className="info__icon" alt="arrBottom" />
      </div>
    )
  },
  (prevProps, nextProps) => {
    return nextProps.render === prevProps.render
  }
)
