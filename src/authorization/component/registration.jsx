import React from 'react'

import '../../assets/style/Style.scss'
import { validEmail, validPassword, validPhone } from 'shared/variables/Regex'
import AuthReg from 'store/auth/ActionAuth'

export default function Registration({ clickOut }) {
  console.log('render Registration')

  const [user, setUser] = React.useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  })

  const validData = (name, value, regExp = false) => {
    if (!regExp) {
      setUser({
        ...user,
        [name]: value,
      })
    } else if (new RegExp(regExp).test(value)) {
      setUser({
        ...user,
        [name]: value,
      })
    }
  }

  const getUser = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    switch (name) {
      case 'name':
        console.log(name)
        validData(name, value)
        break
      case 'email':
        console.log(name)
        validData(name, value, validEmail)
        break
      case 'phone':
        console.log(name)
        validData(name, value, validPhone)
        break
      case 'password':
        console.log(name)
        validData(name, value, validPassword)
        break
      default:
        break
    }
  }

  const onSubmitReg = async (event) => {
    event.preventDefault()
    await AuthReg.loginPOST('/register', user)
    if (AuthReg.tokenGet !== false) {
      await localStorage.setItem('token', AuthReg.tokenGet)
    }
  }

  return (
    <div id="registration" className="register__section__wrap">
      <h1 className="title__h1 section__title">Регистрация в Банке</h1>
      <h2 className="title__h2 section__subtitle">
        Зарегистрируйтесь в личном кабинете, если вы хотите использовать услуги банка
      </h2>
      <form className="form">
        <label className="form__label" htmlFor="registerName">
          Имя и фамилия
        </label>
        <input
          className="form__input"
          name="name"
          type="text"
          placeholder="Пётр Сметанников"
          onChange={getUser}
        />
        <label className="form__label" htmlFor="registerEmail">
          Электропочта
        </label>
        <input
          className="form__input"
          name="email"
          type="email"
          placeholder="your@email.com"
          onChange={getUser}
        />
        <label className="form__label" htmlFor="registerTel">
          Телефонный номер
        </label>
        <input
          className="form__input"
          name="phone"
          type="tel"
          placeholder="+380975556677"
          onChange={getUser}
        />
        <label className="form__label" htmlFor="registerPassword">
          Пароль
        </label>
        <input
          className="form__input"
          name="password"
          onChange={getUser}
          type="password"
          placeholder="Введите свой пароль"
        />
        <label className="form__label form__checkbox" htmlFor="registerTerms">
          <input type="checkbox" name="terms" defaultChecked={false} />
          <span className="checkmark" />Я согласен с положениями Банка
        </label>
        <input
          className="form__button form__submit"
          type="submit"
          value="Зарегистрироваться"
          onClick={onSubmitReg}
        />
      </form>

      <div className="additional__links">
        <p className="additional__links--remark">У вас уже есть аккаунт?</p>
        <span className="additional__links--link cursor" onClick={() => clickOut(true)}>
          Войти
        </span>
      </div>
    </div>
  )
}
