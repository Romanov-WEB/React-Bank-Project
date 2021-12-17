import React from 'react'
import 'assets/style/Style.scss'
import calendar from '../../../assets/icon/global/calendar-icon-thin.svg'
import arrIcon from '../../../assets/icon/global/arr-bottom.svg'

const HeaderTransaction = ({ prop }) => {
  console.log('Render HeaderTransaction')
  return (
    <div className="transaction__header">
      <p className="transaction__header__title">Последние транзакции</p>
      <div className="date__info">
        <img src={calendar} className="calendar__icon" alt="calendar" />
        <p className="date__info__title">Дата:</p>
        <p className="date__info__value">Ноябрь 2020</p>
        <img src={arrIcon} className="arr__icon" alt="arrIcon" />
      </div>
    </div>
  )
}

export default React.memo(HeaderTransaction, () => {})
