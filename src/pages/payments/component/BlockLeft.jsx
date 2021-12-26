import React from 'react'
import BlockLeftHeader from './BlockLeftHeader'
import FormPayment from './Form/FormPayment'

export default function BlockLeft () {
  console.log('Render BlockLeft');
  return (
    <section className="payment payment__block--left">
      <BlockLeftHeader />
      <div className="payment__main">
        <FormPayment />
      </div>
    </section>
  )
}