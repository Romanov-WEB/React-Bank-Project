import { memo } from 'react'
import mastercardIcon from 'assets/icon/global/mastercard-icon.svg'
import visaIcon from 'assets/icon/global/visa-icon.svg'
import arrIcon from 'assets/icon/global/arr-bottom.svg'
import dotsIcon from 'assets/icon/global/dots-icon.svg'
import DataTransaction from 'store/Transaction/dataTransaction'
import tokenLocal from 'data/mock/token'
import DataItem from 'common/items/DataItem'
import DescrCardItem from 'common/items/DescrCardItem'

const ItemCard = ({ toggleCard, index, openCard, prop }) => {
  console.log('Render ItemCard')
  const { token } = tokenLocal
  const card = prop.card.toString()

  const toggleTransaction = (cardNumber) => {
    if (openCard === false) {
      DataTransaction.APITransaction('orders', token, `${cardNumber}`)
    } else {
      DataTransaction.resetTransaction()
    }
  }

  const cardIcon = () => {
    if (prop.system === 'visa') {
      return visaIcon
    } else if (prop.system === 'mastercard') {
      return mastercardIcon
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
        <img src={cardIcon()} className="card__info__icon" alt="cardIcon" />
        <p className="card__info__data">
          {`${prop.description} ** ${card.slice(card.length - 4, card.length)}`}
        </p>
        <p className="card__info__balance">${prop.balance}</p>
        <img src={arrIcon} className="arr__icon" alt="arrIcon" />
      </div>
      <div className="card__info__main">
        <DescrCardItem card={card} issuer={prop.issuer} valid={prop.valid} />
        <div className="card__info__settings">
          <DataItem text={'Класс карты'} props={prop.class} />
          <DataItem text={'IBAN-номер'} props={prop.iban} />
          <DataItem text={'Кредитный лимит'}
            props={prop.limit === 0 ? 'Отсутствует' : prop.limit}
          />
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

export default memo(ItemCard, (prevProp, nextProp) => {
  return prevProp.openCard === nextProp.openCard
})
