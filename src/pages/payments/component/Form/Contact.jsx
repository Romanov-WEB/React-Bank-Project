import React from 'react'

export default function Contact() {
	console.log('Render Contact');
	return (
    <div>
      <fieldset className="bottom__gap">
        <div className="w-220">
          <label className="form__label" htmlFor="contact">
            Контакт
          </label>
          <input className="form__input" type="text" id="contact" placeholder="Петр Сметанников" />
        </div>
        <p className="form__separator">или</p>
        <div className="w-220">
          <label className="form__label " htmlFor="contactTelNumber">
            Телефонный номер
          </label>
          <input
            className="form__input"
            type="tel"
            id="contactTelNumber"
            placeholder={+38012345678}
          />
        </div>
      </fieldset>
      <label className="form__label w-125" htmlFor="totalSum">
        Сумма пополения
      </label>
      <input className="form__input w-125" type="text" id="totalSum" placeholder="150 грн" />
      <input
        className="form__button form__submit form__submit__light w-230"
        type="submit"
        defaultValue="Пополнить мобилку"
      />
      <p className="clarification__text">
        Новый контакт для пополнения мобилки можно сохранить в настройках.
      </p>
    </div>
  )
}
