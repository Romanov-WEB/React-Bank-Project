import React from 'react'

export default function BalanceBlock() {
  console.log('Render BalanceBlock');
  return (
    <div className="balance__block card__balance__block">
      <div className="balance__block__header">
        <p className="balance__block__title">Текущий баланс карт</p>
      </div>
      <div className="balance__block__main">
        <div className="card__balance card__balance__item">
          <img
            src="img/icon/mastercard-icon.svg"
            className="card__balance__icon"
            alt={'mastercard-icon.svg'}
          />
          <div>
            <p className="card__balance__type">Личная карта</p>
            <p className="card__balance__number">3210 **** **** 4008</p>
          </div>
          <p className="card__balance__data">$880.20</p>
          <img
            src="img/icon/increase-icon.svg"
            className="card__balance__status"
            alt={'increase-icon.svg'}
          />
        </div>
        <div className="card__balance card__balance__item">
          <img src="img/icon/visa-icon.svg" className="card__balance__icon" alt={'visa-icon.svg'} />
          <div>
            <p className="card__balance__type">Личная карта</p>
            <p className="card__balance__number">3210 **** **** 4008</p>
          </div>
          <p className="card__balance__data">$880.20</p>
          <img
            src="img/icon/decrease-icon.svg"
            className="card__balance__status"
            alt={'decrease-icon.svg'}
          />
        </div>
      </div>
    </div>
  )
}
