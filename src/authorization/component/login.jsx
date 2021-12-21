import React from 'react'

import AuthReg from 'store/auth/ActionAuth'
import DataUser from 'store/user/dataUser'
import { validEmail } from 'shared/variables/Regex'
import 'assets/style/Style.scss'

export default function Login({ clickOut }) {
  console.log('render Login')
  const [loginUser, setLoginUser] = React.useState({ email: false, password: false })
  const [checked, setChecked] = React.useState(false)

  const validateLogin = (re, name, value) => {
    if (re.test(value)) {
      return setLoginUser({
        ...loginUser,
        [name]: value,
      })
    }
    setLoginUser({
      ...loginUser,
      [name]: false,
    })
  }

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    switch (name) {
      case 'email':
        validateLogin(validEmail, name, value)
        break
      case 'password':
        setLoginUser({
          ...loginUser,
          [name]: value,
        })
        break
      case 'checked':
        setChecked(!checked)
        break
      default:
        break
    }
  }

  const onSubmitLogin = async (event) => {
    event.preventDefault()
    await AuthReg.loginPOST('/login', loginUser)
    if (AuthReg.tokenGet !== false) {
      await localStorage.setItem('token', AuthReg.tokenGet)
      await AuthReg.getAuth('/auth', AuthReg.tokenGet)
      await DataUser.getUser('/profile', AuthReg.tokenGet)
    }
  }

  return (
    <div id="login" className="log_in__section__wrap">
      <h1 className="title__h1 section__title">Вход в Банк</h1>
      <h2 className="title__h2 section__subtitle">
        С возвращением! Пройдите авторизацию, для того чтобы пользоваться банковскими услугами.
      </h2>
      <form className="form">
        <label className="form__label" htmlFor="email">
          Электропочта
        </label>
        <input
          className="form__input"
          name="email"
          type="email"
          id="email"
          placeholder="your@email.com"
          onChange={handleInputChange}
        />

        <label className="form__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="form__input"
          name="password"
          type="password"
          id="password"
          placeholder="Введите свой пароль"
          onChange={handleInputChange}
        />

        <label className="form__label form__checkbox" htmlFor="savePassword">
          <input
            type="checkbox"
            id="savePassword"
            name="checked"
            defaultChecked={false}
            onChange={handleInputChange}
          />
          <span className="checkmark" />
          Сохранить логин и пароль
        </label>
        <input
          className="form__button form__submit"
          type="submit"
          value="Войти в Банк"
          onClick={onSubmitLogin}
        />
      </form>
      <div className="additional__links">
        <p className="additional__links--remark">Нет аккаунта в нашем Банке?</p>
        <span className="additional__links--link cursor" onClick={() => clickOut(false)}>
          Зарегистрироваться
        </span>
      </div>
    </div>
  )
}
