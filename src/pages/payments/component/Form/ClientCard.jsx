import React from 'react'

export default function ClientCard() {
  console.log('Render ClientCard');
  return (
    <div style={{display: 'none'}} >
    <fieldset className="bottom__gap">
      <div className="w-220">
        <label className="form__label" htmlFor="contact">Номер карты</label>
        <input className="form__input" type="text" id="contact" placeholder="1234 5678 9012 3456" />
      </div>
      <p className="form__separator">или</p>
      <div className="w-220 form__info">
        <label className="form__label " htmlFor="contactTelNumber">Контакт</label>
        <div className=" form__info">
          {/* Для того что бы открыть dropdown нужно добавить к классу dropdown класс dropdown--open и к классу dropdown__toggle класс active */}
          <div className="dropdown dropdown--open">
            {/* dropdown--open */}
            <div className="dropdown__toggle active">
              {/* active */}
              <img src="img/icon/arr-bottom.svg" className="info__icon" alt={'arr-bottom.svg'} />
              <input className="form__input" type="text" id="contactTelNumber" placeholder="Василий Петрович" readOnly />
            </div>
            <div className="dropdown__list">
              <div className="dropdown__list__item">
                <p className="form__input">Василий Петрович</p>
              </div>
              <div className="dropdown__list__item">
                <p className="form__input">Петр Васильевич</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
    <label className="form__label w-125" htmlFor="totalSum">Сумма перевода</label>
    <input className="form__input w-125" type="text" id="totalSum" placeholder="2300 грн" />
    <input className="form__button form__submit form__submit__light w-230" type="submit" defaultValue="Перевести деньги" />
    <p className="clarification__text">Новую карту можно сохранить в контактной книге в настройках.</p>
  </div>
  )
}
