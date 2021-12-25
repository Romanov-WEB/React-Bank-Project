import React from 'react'
import { observer } from 'mobx-react-lite'

import 'assets/style/Style.scss'
import HeaderTransaction from './HeaderTransaction'
import Preloader from './Preloader'
import TransactionLayout from './TransactionLayout'
import DataTransaction from 'store/Transaction/dataTransaction'

const Transaction = observer(() => {
  console.log('Render Transaction')

  React.useEffect(() => {
    DataTransaction.resetTransaction()
  }, [])

  const elem = DataTransaction.dataTransaction.map((item, index) => (
    <TransactionLayout props={item} key={index} />
  ))
  const current = elem.length

  return (
    <article className="transaction__layout">
      <HeaderTransaction />
      {/* className = preloader ||  overflow*/}
      <div className={`transaction__main ${current !== 0 ? 'overflow' : 'preloader'}`}>
        {current !== 0 ? elem : <Preloader />}
      </div>
    </article>
  )
})

export default Transaction
