import React from 'react'

export default function DataItem({ text, props }) {
  return (
    <div className="data-item">
      <p className="legend">{text}</p>
      <p className="data">{props}</p>
    </div>
  )
}
