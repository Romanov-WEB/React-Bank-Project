import React from 'react'
import logoAut from '../../../assets/icon/global/log-out-icon.svg'
import { observer } from 'mobx-react-lite'
import DataUser from 'store/user/dataUser'
import AuthReg from '../../../store/auth/ActionAuth'

const Header = observer(() => {
  const exit = () => {
    localStorage.clear()
    AuthReg.getAuth('/auth', localStorage.getItem('token'))
  }

  return (
    <header className="page__header">
      <h1 className="page__header__title">Ваши карты</h1>
      <p className="page__header__username">{DataUser.getName}</p>
      <span className="page__header__icon__wrap">
        <div className="notification__icon" />
      </span>
      <span className="page__header__icon__wrap cursor" onClick={exit}>
        <img src={logoAut} className="page_header__icon" alt="logo" />
      </span>
    </header>
  )
})

export default Header
