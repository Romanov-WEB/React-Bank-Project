import React from 'react'
import logo from '../../../assets/icon/logo.svg'
import visa from '../../../assets/icon/visa-icon-small.svg'
import master from '../../../assets/icon/mastercard-icon-small.svg'
import objCatalog from '../../../assets/icon/catalog/object-catalog'
import ListItem from '../../../pages/card/list-item/list-item'

function Nav() {
  const element = objCatalog.map((item, ind) => {
    const [label, icon] = item
    return <ListItem key={ind + 1} label={label} icon={icon} ind={ind + 1} />
  })
  return (
    <nav className="dashbord__nav">
      <img src={logo} className="logo dashbord__logo" alt="logo" />
      <ul className="catalog catalog__list">{element}</ul>

      <div className="card card__section">
        <h2 className="card__section__title">Карты</h2>

        <span className="card__item">
          <img className="card__item__logo" src={visa} alt="visa" />
          <span className="card__item__name">Личная карта</span>
        </span>

        <span className="card__item">
          <img className="card__item__logo" src={master} alt="mastercard" />
          <span className="card__item__name">Зарплатная карта</span>
        </span>
      </div>
    </nav>
  )
}

export default Nav
