import React from 'react'

export default function Payments() {
    return (
        <div className="main__info__section__wrapp payment__section">
        <section className="payment payment__block--left">
            <div className="payment__header">
            <p className="payment__title">Моментальный перевод</p>
            <img src="img/icon/dots-icon.svg" className="payment__more__icon" alt={'dots-icon.svg'} />
            </div>
            <div className="payment__main">
            <form className="form">
                <div className="paysystem__block">
                <label className="form__label w-260" htmlFor="paySystem">Выбор карты</label>
                {/* 
                                        Для того что бы открыть dropdown нужно добавить к классу dropdown класс dropdown--open и к классу dropdown__toggle класс active
                                    */}
                <div className="form__paysystem paysystem__visa w-260">
                    <div className="dropdown">
                    <div className="dropdown__toggle">
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
                <div id="mobile">
                <fieldset className="bottom__gap">
                    <div className="w-220">
                        <label className="form__label" htmlFor="contact">Контакт</label>
                        <input className="form__input" type="text" id="contact" placeholder="Петр Сметанников" />
                    </div>
                    <p className="form__separator">или</p>
                    <div className="w-220">
                        <label className="form__label " htmlFor="contactTelNumber">Телефонный номер</label>
                        <input className="form__input" type="tel" id="contactTelNumber" placeholder={+38012345678} />
                    </div>
                </fieldset>
                <label className="form__label w-125" htmlFor="totalSum">Сумма пополения</label>
                <input className="form__input w-125" type="text" id="totalSum" placeholder="150 грн" />
                <input className="form__button form__submit form__submit__light w-230" type="submit" defaultValue="Пополнить мобилку" />
                <p className="clarification__text">Новый контакт для пополнения мобилки можно сохранить в настройках.</p>
                </div>
                <div style={{display: 'none'}} id="utilityBills">
                <fieldset>
                    <div className="w-230 gap">
                    <label className="form__label" htmlFor="adress">Адрес</label>
                    {/* 
                         Для того что бы открыть dropdown нужно добавить к классу dropdown класс dropdown--open и к классу dropdown__toggle класс active
                                    */}
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
                    {/* 
                                        Для того что бы открыть dropdown нужно добавить к классу dropdown класс dropdown--open и к классу dropdown__toggle класс active
                                        */}
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
                <div style={{display: 'none'}} id="clientCard">
                <fieldset className="bottom__gap">
                    <div className="w-220">
                    <label className="form__label" htmlFor="contact">Номер карты</label>
                    <input className="form__input" type="text" id="contact" placeholder="1234 5678 9012 3456" />
                    </div>
                    <p className="form__separator">или</p>
                    <div className="w-220 form__info">
                    <label className="form__label " htmlFor="contactTelNumber">Контакт</label>
                    <div className=" form__info">
                        {/* 
                                            Для того что бы открыть dropdown нужно добавить к классу dropdown класс dropdown--open и к классу dropdown__toggle класс active
                                        */}
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
                <div style={{display: 'none'}} id="ownCard">
                <div className="paysystem__block">
                    <label className="form__label w-260" htmlFor="paySystem">Выбор карты</label>
                    <div className="form__paysystem paysystem__mastercard w-260">
                    {/* 
                                        Для того что бы открыть dropdown нужно добавить к классу dropdown класс dropdown--open и к классу dropdown__toggle класс active
                                    */}
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
            </form>
            </div>
        </section>
        <div className="payment__block--right">
            <div className="balance__block card__balance__block">
            <div className="balance__block__header">
                <p className="balance__block__title">Текущий баланс карт</p>
            </div>
            <div className="balance__block__main">
                <div className="card__balance card__balance__item">
                <img src="img/icon/mastercard-icon.svg" className="card__balance__icon" alt={'mastercard-icon.svg'} />
                <div>
                    <p className="card__balance__type">Личная карта</p>
                    <p className="card__balance__number">3210 **** **** 4008</p>
                </div>
                <p className="card__balance__data">$880.20</p>
                <img src="img/icon/increase-icon.svg" className="card__balance__status" alt={'increase-icon.svg'} />
                </div>
                <div className="card__balance card__balance__item">
                <img src="img/icon/visa-icon.svg" className="card__balance__icon" alt={'visa-icon.svg'} />
                <div>
                    <p className="card__balance__type">Личная карта</p>
                    <p className="card__balance__number">3210 **** **** 4008</p>
                </div>
                <p className="card__balance__data">$880.20</p>
                <img src="img/icon/decrease-icon.svg" className="card__balance__status" alt={'decrease-icon.svg'} />
                </div>
            </div>
            </div>
            <article className="transaction__layout">
            <div className="transaction__header">
                <p className="transaction__header__title">Последние транзакции</p>
            </div>
            <div className="transaction__main ">
                <div className="transaction__item">
                <img className="transaction__item__icon" src="img/transaction/home.svg" alt={'home.svg'} />
                <div>
                    <p className="transaction__item__type">Оплата коммуналки</p>
                    <p className="transaction__item__data">Электричество</p>
                </div>
                <div className="transaction__item__value">- $180</div>
                <img src="img/icon/dots-icon.svg" className="transaction__item__more" alt={'dots-icon.svg'} />
                </div>
                <div className="transaction__item">
                <img className="transaction__item__icon" src="img/transaction/phone.svg" alt={'phone.svg'} />
                <div>
                    <p className="transaction__item__type">Пополнение мобилки</p>
                    <p className="transaction__item__data">+380 67 444 4444</p>
                </div>
                <div className="transaction__item__value">- $180</div>
                <img src="img/icon/dots-icon.svg" className="transaction__item__more" alt={'dots-icon.svg'} />
                </div>
                <div className="transaction__item">
                <img className="transaction__item__icon" src="img/transaction/money-pig.svg" alt={'money-pig.svg'} />
                <div>
                    <p className="transaction__item__type">Перевод денег в копилку</p>
                    <p className="transaction__item__data">На новую плойку</p>
                </div>
                <div className="transaction__item__value">- $40</div>
                <img src="img/icon/dots-icon.svg" className="transaction__item__more" alt={'dots-icon.svg'} />
                </div>
                <div className="transaction__item">
                <img className="transaction__item__icon" src="img/transaction/atm.svg" alt={'atm.svg'} />
                <div>
                    <p className="transaction__item__type">Пополнение карты</p>
                    <p className="transaction__item__data">ATM</p>
                </div>
                <div className="transaction__item__value increase">+ $180</div>
                <img src="img/icon/dots-icon.svg" className="transaction__item__more" alt={'dots-icon.svg'} />
                </div>
                <div className="transaction__item">
                <img className="transaction__item__icon" src="img/transaction/transfer.svg" alt={'transfer.svg'} />
                <div>
                    <p className="transaction__item__type">Перевод на карту</p>
                    <p className="transaction__item__data">Карта **** 3002</p>
                </div>
                <div className="transaction__item__value">- $730</div>
                <img src="img/icon/dots-icon.svg" className="transaction__item__more" alt={'dots-icon.svg'} />
                </div>
            </div>
            </article>
        </div>
        </div>
    )
}
