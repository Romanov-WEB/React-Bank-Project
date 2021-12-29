import React from 'react'
import cardBackground from 'assets/img/card-back.jpg'
import visaWhite from 'assets/icon/global/visa-white.svg'

export default function DescrCardItem({ card, issuer, valid }) {
  const data = new Date(Date.parse(valid))
  const year = data.getFullYear().toString()
  const month = data.getMonth()

  return (
    <div className="card__info__card">
      <img src={cardBackground} className="card__back" alt={cardBackground} />
      <img src={visaWhite} className="card__type" alt="visaWhite" />
      <p className="card__number">{card}</p>
      <p className="card__owner__name">{issuer}</p>
      <p className="card__exp__date">{`${month < 10 ? '0' + month : month} / 
        ${year.slice(year.length - 2, year.length)}`}
      </p>
    </div>
  )
}
