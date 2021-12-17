import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import AuthReg from './store/auth/ActionAuth'
import DataUser from './store/user/dataUser'
import DataCard from './store/getCard/DataCard'
import tokenLocal from 'data/mock/token'

const OpenToken = async (tokenLocal) => {
  const { token } = tokenLocal
  await AuthReg.getAuth('/auth', token)
  await DataUser.getUser('/profile', token)
  await DataCard.getCard('/cards', token)
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}
OpenToken(tokenLocal)
