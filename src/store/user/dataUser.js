import { makeAutoObservable, runInAction } from 'mobx'
import { APIServer } from '../../shared/variables/variables-API'

class DataUser {
  userName = ''
  constructor() {
    makeAutoObservable(this)
  }
  async getUser(url, token) {
    try {
      const response = await fetch(`${APIServer}${url}`, {
        headers: {
          accept: '*/*',
          'x-token': token,
        },
      })
      const { data } = await response.json()
      if (response.ok) {
        await runInAction(() => {
          this.userName = data.name
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  get getName() {
    return this.userName
  }
}
export default new DataUser()
