import React from 'react'

export default function UtilityBills() {
  console.log('Render UtilityBills');
  return (
    <div style={{display: 'none'}} >
    <fieldset>
      <div className="w-230 gap">
        <label className="form__label" htmlFor="adress">Адрес</label>
        {/* Для того что бы открыть dropdown нужно добавить к классу dropdown класс dropdown--open и к классу dropdown__toggle класс active */}
        <div className="dropdown">
          {/* dropdown--open */}
          <div className=" form__info dropdown__toggle ">
            {/* active */}
            <input className="form__input" type="text" id="adress" placeholder="Квартира сына" readOnly />
            <img src="img/icon/arr-bottom.svg" className="info__icon" alt={'arr-bottom.svg'} />
          </div>
          <div className="dropdown__list">
            <div className="dropdown__list__item">
              <p className="form__input">Квартира сына 1</p>
            </div>
            <div className="dropdown__list__item">
              <p className="form__input">Квартира сына 2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-230">
        <label className="form__label" htmlFor="services">Тип услуги</label>
        {/* Для того что бы открыть dropdown нужно добавить к классу dropdown класс dropdown--open и к классу dropdown__toggle класс active */}
        <div className="dropdown ">
          {/* dropdown--open */}
          <div className=" form__info ">
            {/* active */}
            <input className="form__input" type="text" id="services" placeholder="Квартира сына" readOnly />
            <img src="img/icon/arr-bottom.svg" className="info__icon" alt={'arr-bottom.svg'} />
          </div>
          <div className="dropdown__list">
            <div className="dropdown__list__item">
              <p className="form__input">Все услуги</p>
            </div>
            <div className="dropdown__list__item">
              <p className="form__input">Вода</p>
            </div>
            <div className="dropdown__list__item">
              <p className="form__input">Домофон</p>
            </div>
            <div className="dropdown__list__item">
              <p className="form__input">ЖЭК</p>
            </div>
            <div className="dropdown__list__item">
              <p className="form__input">Интернет</p>
            </div>
            <div className="dropdown__list__item">
              <p className="form__input">Охрана</p>
            </div>
            <div className="dropdown__list__item">
              <p className="form__input">Электричество</p>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
    <div className="payments__info__chb">
      <label htmlFor="paymentForMonth">За текущий месяц</label>
      {/* Для того что бы "включить switch нужно добавить к классу switch__block класс checked" */}
      <div className="switch__block  ">
        <div className="switcher " />
        <input type="checkbox" id="paymentForMonth" />
      </div>
      <p>Вся задолженность на сегодняшний день</p>
    </div>
    <input className="form__button form__submit form__submit__light w-230" type="submit" defaultValue="Оплатить коммуналку" />
    <p className="clarification__text">Новый адрес для оплаты коммуналки
      можно сохранить в настройках.</p>
  </div>
  )
}
