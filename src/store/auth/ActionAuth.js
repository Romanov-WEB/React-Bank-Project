import { makeAutoObservable, runInAction } from 'mobx'
import { APIServer } from '../../shared/variables/variables-API'

class AuthReg {
  tokenValid = false
  token = false
  constructor() {
    makeAutoObservable(this)
  }

  async loginPOST(url, user) {
    try {
      const response = await fetch(`${APIServer}${url}`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      const { data, message } = await response.json()
      if (!response.ok) {
        console.log(message)
      }
      return (this.token = data)
    } catch (e) {
      console.log(e)
    }
  }
  async getAuth(url, token) {
    try {
      const response = await fetch(`${APIServer}${url}`, {
        headers: {
          accept: '*/*',
          'x-token': token,
        },
      })
      await runInAction(() => {
        this.tokenValid = response.ok
      })
    } catch (e) {
      console.log(e)
    }
  }

  get tokenGet() {
    return this.token
  }

  get validAuth() {
    return this.tokenValid
  }
}
export default new AuthReg()
