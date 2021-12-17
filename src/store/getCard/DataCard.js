import { makeAutoObservable, runInAction } from 'mobx'
import { APIServer } from '../../shared/variables/variables-API'

class DataCard {
  data = []
  constructor() {
    makeAutoObservable(this)
  }
  async getCard(url, token) {
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
          this.data.push(...data)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}

export default new DataCard()
