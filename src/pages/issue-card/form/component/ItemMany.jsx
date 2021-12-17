import React from 'react'
import 'assets/style/Style.scss'

export default React.memo(
  function ItemMany({ item, i, chooseMoney, render }) {
    console.log(`render ItemMany `)
    return (
      <div key={i} className="dropdown__list__item" onClick={() => chooseMoney(item)}>
        <p className="form__input">{item}</p>
      </div>
    )
  },
  (prev, next) => {
    return next.render === prev.render
  }
)
