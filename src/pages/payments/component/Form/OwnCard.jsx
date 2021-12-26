import React from 'react'

export default function OwnCard() {
  console.log('Render OwnCard');
  return (
    <div style={{display: 'none'}} >
    <div className="paysystem__block">
      <label className="form__label w-260" htmlFor="paySystem">Выбор карты</label>
      <div className="form__paysystem paysystem__mastercard w-260">
        {/* Для того что бы открыть dropdown нужно добавить к классу dropdown класс dropdown--open и к классу dropdown__toggle класс active */}
        <div className="dropdown">
          {/* dropdown--open */}
          <div className="dropdown__toggle">
            {/* active */}
            <img src="img/icon/visa-icon.svg" className="paysystem__icon visa__icon" alt={'visa-icon.svg'} />
            <input className="form__input" type="text" id="paySystem" placeholder="Виза" readOnly />
            <img src="img/icon/arr-bottom.svg" className="info__icon" alt={'arr-bottom.svg'} />
          </div>
          <div className="dropdown__list">
            <div className="dropdown__list__item">
              <img src="img/icon/visa-icon.svg" className="paysystem__icon visa__icon" alt={'visa-icon.svg'} />
              <p className="form__input">Виза</p>
            </div>
            <div className="dropdown__list__item">
              <img src="img/icon/mastercard-icon.svg" className="paysystem__icon mastercard__icon" alt={'mastercard-icon.svg'} />
              <p className="form__input">Mastercard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <label className="form__label w-125" htmlFor="totalSum">Сумма перевода</label>
    <input className="form__input w-125" type="text" id="totalSum" placeholder="1500 грн" />
    <input className="form__button form__submit form__submit__light w-230" type="submit" defaultValue="Перевести деньги" />
    <p className="clarification__text">Новый мобильный номер можно сохранить в контактной книге в настройках.</p>
  </div>
  )
}
