import { makeAutoObservable, runInAction } from 'mobx'
import { APIServer } from '../../shared/variables/variables-API'

class DataTransaction {
  dataTransaction = []
  constructor() {
    makeAutoObservable(this)
  }
  async APITransaction(url, token, cardNumber) {
    const transaction = await fetch(`${APIServer}/${url}/${cardNumber}`, {
      headers: {
        accept: 'application/json',
        'x-token': token,
      },
    })
    const { data } = await transaction.json()
    if (!transaction.ok) {
      console.error(transaction.status)
    }
    runInAction(() => {
      this.dataTransaction = data
    })
  }
  resetTransaction() {
    runInAction(() => {
      this.dataTransaction = []
    })
  }
}

export default new DataTransaction()
