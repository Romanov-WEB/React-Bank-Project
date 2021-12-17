import React from 'react'
import arrBottom from 'assets/icon/global/arr-bottom.svg'

export default React.memo(
  function ManyHeaders({ toggleMany, label, render }) {
    console.log('render ManyHeaders')
    return (
      <div className="dropdown__toggle" onClick={toggleMany}>
        <input className="form__input" type="text" readOnly value={label} />
        <img src={arrBottom} className="info__icon" alt="arrBottom" />
      </div>
    )
  },
  (prevProps, nextProps) => {
    return nextProps.render === prevProps.render
  }
)
