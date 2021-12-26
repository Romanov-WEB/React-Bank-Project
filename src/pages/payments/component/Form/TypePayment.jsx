import React from 'react'

export default function TypePayment() {
  console.log('Render TypePayment');
  return (
    <>
      <label className="form__label">Тип платежа</label>
      <div className="form__select form__select--light">
        <div className=" radio__button">
          <input type="radio" name="cardClass" id="ownCard" />
          <div className="select__back" />
          <label htmlFor="ownCard">На свою карту</label>
        </div>
        <div className=" radio__button">
          <input type="radio" name="cardClass" id="otherCard" />
          <div className="select__back" />
          <label htmlFor="otherCard">На чужую карту</label>
        </div>
        <div className=" radio__button">
          <input type="radio" name="cardClass" id="communal" />
          <div className="select__back" />
          <label htmlFor="communal">Коммуналка</label>
        </div>
        <div className=" radio__button">
          <input type="radio" name="cardClass" id="mobile" defaultChecked />
          <div className="select__back" />
          <label htmlFor="mobile">Мобильный</label>
        </div>
      </div>
    </>
  )
}
