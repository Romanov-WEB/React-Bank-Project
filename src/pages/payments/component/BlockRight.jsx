import React from 'react'
import BalanceBlock from './BalanceBlock';
import BlockRightHeader from './BlockRightHeader';
import TransactionItem from './TransactionItem';

export default function BlockRight () {
  console.log('Render BlockRight');
  return (
    <div className="payment__block--right">
      <BalanceBlock />
      <article className="transaction__layout">
        < BlockRightHeader />
        <TransactionItem />
      </article>
    </div>
  )
}
