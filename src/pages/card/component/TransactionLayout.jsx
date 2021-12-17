import React from 'react'
import 'assets/style/Style.scss'
import dataImgTransaction from 'data/mock/imgTransaction'
import dots from 'assets/icon/global/dots-icon.svg'

const TransactionLayout = ({ props }) => {
  console.log('Render TransactionLayout')
  const img = () => {
    for (const key in dataImgTransaction) {
      if (key === props.description) {
        return dataImgTransaction[key]
      }
    }
  }
  return (
    <div className="transaction__main overflow">
      <div className="transaction__item">
        <img className="transaction__item__icon" src={img()} alt={props.description} />
        <div>
          <p className="transaction__item__type">{props.title}</p>
          <p className="transaction__item__data">{props.description}</p>
        </div>
        <div className="transaction__item__value">{props.amount}</div>
        <img src={dots} className="transaction__item__more" alt={dots} />
      </div>
    </div>
  )
}

export default TransactionLayout
