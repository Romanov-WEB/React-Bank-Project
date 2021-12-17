import React from 'react'
import '../../../assets/style/Style.scss'

const ListItem = ({ label, icon, ind }) => (
  <li key={ind} className="catalog__item">
    <span className="catalog__item__wrap">
      <img className="catalog__item__icon" src={icon} alt={label} />
      <p className="catalog__item__title">{label}</p>
    </span>
  </li>
)

export default ListItem
