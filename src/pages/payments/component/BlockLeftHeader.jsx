import React from 'react'

export default function BlockLeftHeader() {
    console.log('Render BlockLeftHeader');
    return (
        <div className="payment__header">
            <p className="payment__title">Моментальный перевод</p>
            <img src="img/icon/dots-icon.svg" className="payment__more__icon" alt={'dots-icon.svg'} />
        </div>
    )
}
