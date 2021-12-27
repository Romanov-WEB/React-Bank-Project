import React from 'react'
import dots from 'assets/icon/global/dots-icon.svg'

export default function BlockLeftHeader() {
    console.log('Render BlockLeftHeader');
    return (
        <div className="payment__header">
            <p className="payment__title">Моментальный перевод</p>
            <img src={dots} className="payment__more__icon" alt={'dots-icon.svg'} />
        </div>
    )
}
React.memo(BlockLeftHeader, ()=> {
    return true
})
