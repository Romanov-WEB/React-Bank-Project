import React from 'react'

export default React.memo(
  function ButtonElem({ text, i, checked, clickChecked }) {
    console.log('render ButtonElem')

    return (
      <div key={`${text + i}`} className="radio__button" onClick={() => clickChecked(i)}>
        <input type="radio" name={text} checked={checked} readOnly />
        <label htmlFor="low">{text}</label>
        <div className="select__back" />
      </div>
    )
  },
  (prevProps, nextProps) => {
    if (prevProps.checked !== nextProps.checked) {
      return false
    } else {
      return true
    }
  }
)
