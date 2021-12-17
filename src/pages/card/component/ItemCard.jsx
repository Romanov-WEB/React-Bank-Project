import React from 'react'

import mastercardIcon from '../../../assets/icon/global/mastercard-icon.svg'
import arrIcon from '../../../assets/icon/global/arr-bottom.svg'
import cardBackground from '../../../assets/img/card-back.jpg'
import visaWhite from '../../../assets/icon/global/visa-white.svg'
import dotsIcon from '../../../assets/icon/global/dots-icon.svg'
import DataTransaction from '../../../store/Transaction/dataTransaction'
import tokenLocal from 'data/mock/token'

const ItemCard = ({ toggleCard, index, openCard, prop }) => {
  console.log('Render ItemCard')
  const { token } = tokenLocal

  const data = new Date(Date.parse(prop.valid))
  const year = data.getFullYear().toString()
  const month = data.getMonth()
  const card = prop.card.toString()

  const toggleTransaction = (cardNumber) => {
    if (openCard === false) {
      DataTransaction.APITransaction('orders', token, `${cardNumber}`)
    } else {
      DataTransaction.resetTransaction()
    }
  }

  return (
    <div className={`card__info__item ${openCard || 'collapsed'}`}>
      <div
        className="card__info__header"
        onClick={() => {
          toggleCard(index)
          toggleTransaction(prop.card)
        }}
      >
        <img src={mastercardIcon} className="card__info__icon" alt="cardIcon" />
        <p className="card__info__data">{`Личная карта ** ${card.slice(
          card.length - 4,
          card.length
        )}`}</p>
        <p className="card__info__balance">${prop.balance}</p>
        <img src={arrIcon} className="arr__icon" alt="arrIcon" />
      </div>

      <div className="card__info__main">
        <div className="card__info__card">
          <img src={cardBackground} className="card__back" alt={cardBackground} />
          <img src={visaWhite} className="card__type" alt="visaWhite" />
          <p className="card__number">{prop.card}</p>
          <p className="card__owner__name">{prop.issuer}</p>
          <p className="card__exp__date">{`${month < 10 ? '0' + month : month} / 
          ${year.slice(year.length - 2, year.length)}`}</p>
        </div>

        <div className="card__info__settings">
          <div className="data-item">
            <p className="legend">Класс карты</p>
            <p className="data">{prop.class}</p>
          </div>

          <div className="data-item">
            <p className="legend">IBAN-номер</p>
            <p className="data">{prop.iban}</p>
          </div>

          <div className="data-item">
            <p className="legend">Кредитный лимит</p>
            <p className="data">{prop.limit === 0 ? 'Отсутствует' : prop.limit}</p>
          </div>

          <div className="data-item">
            <p className="legend">Покупки в интернете</p>
            <div
              className={`switch__block internet__switch__block ${prop.internet ? 'checked' : ''}`}
            >
              <div className="switcher " />
            </div>
          </div>

          <div className="data-item">
            <p className="legend">3D Security</p>
            <div
              className={`switch__block security__switch__block ${
                prop.security3d ? 'checked' : ''
              }`}
            >
              <div className="switcher " />
            </div>
          </div>

          <div className="other__settings">
            <img src={dotsIcon} className="settings__icon" alt="dotsIcon" />
            <p className="settings__name">Операции над картой</p>
          </div>
        </div>
      </div>
    </div>
  )
}
// export default ItemCard

export default React.memo(ItemCard, (prevProp, nextProp) => {
  return prevProp.openCard === nextProp.openCard
})
