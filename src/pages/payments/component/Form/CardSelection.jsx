import React from 'react'

export default function CardSelection() {
  console.log('Render CardSelection');
  return (
    <div className="paysystem__block">
      <label className="form__label w-260" htmlFor="paySystem">
        Выбор карты
      </label>
      {/* Для того что бы открыть dropdown нужно добавить к классу dropdown класс dropdown--open и к классу dropdown__toggle класс active */}
      <div className="form__paysystem paysystem__visa w-260">
        <div className="dropdown">
          <div className="dropdown__toggle">
            <img
              src="img/icon/visa-icon.svg"
              className="paysystem__icon visa__icon"
              alt={'visa-icon.svg'}
            />
            <input className="form__input" type="text" id="paySystem" placeholder="Виза" readOnly />
            <img src="img/icon/arr-bottom.svg" className="info__icon" alt={'arr-bottom.svg'} />
          </div>
          <div className="dropdown__list">
            <div className="dropdown__list__item">
              <img
                src="img/icon/visa-icon.svg"
                className="paysystem__icon visa__icon"
                alt={'visa-icon.svg'}
              />
              <p className="form__input">Виза</p>
            </div>
            <div className="dropdown__list__item">
              <img
                src="img/icon/mastercard-icon.svg"
                className="paysystem__icon mastercard__icon"
                alt={'mastercard-icon.svg'}
              />
              <p className="form__input">Mastercard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
