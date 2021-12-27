import React from 'react'

export default function TransactionItem() {
  console.log('Render TransactionItem');
  return (
    <div className="transaction__main ">
      <div className="transaction__item">
        <img className="transaction__item__icon" src="img/transaction/home.svg" alt={'home.svg'} />
        <div>
          <p className="transaction__item__type">Оплата коммуналки</p>
          <p className="transaction__item__data">Электричество</p>
        </div>
        <div className="transaction__item__value">- $180</div>
        <img
          src="img/icon/dots-icon.svg"
          className="transaction__item__more"
          alt={'dots-icon.svg'}
        />
      </div>
      <div className="transaction__item">
        <img
          className="transaction__item__icon"
          src="img/transaction/phone.svg"
          alt={'phone.svg'}
        />
        <div>
          <p className="transaction__item__type">Пополнение мобилки</p>
          <p className="transaction__item__data">+380 67 444 4444</p>
        </div>
        <div className="transaction__item__value">- $180</div>
        <img
          src="img/icon/dots-icon.svg"
          className="transaction__item__more"
          alt={'dots-icon.svg'}
        />
      </div>
      <div className="transaction__item">
        <img
          className="transaction__item__icon"
          src="img/transaction/money-pig.svg"
          alt={'money-pig.svg'}
        />
        <div>
          <p className="transaction__item__type">Перевод денег в копилку</p>
          <p className="transaction__item__data">На новую плойку</p>
        </div>
        <div className="transaction__item__value">- $40</div>
        <img
          src="img/icon/dots-icon.svg"
          className="transaction__item__more"
          alt={'dots-icon.svg'}
        />
      </div>
      <div className="transaction__item">
        <img className="transaction__item__icon" src="img/transaction/atm.svg" alt={'atm.svg'} />
        <div>
          <p className="transaction__item__type">Пополнение карты</p>
          <p className="transaction__item__data">ATM</p>
        </div>
        <div className="transaction__item__value increase">+ $180</div>
        <img
          src="img/icon/dots-icon.svg"
          className="transaction__item__more"
          alt={'dots-icon.svg'}
        />
      </div>
      <div className="transaction__item">
        <img
          className="transaction__item__icon"
          src="img/transaction/transfer.svg"
          alt={'transfer.svg'}
        />
        <div>
          <p className="transaction__item__type">Перевод на карту</p>
          <p className="transaction__item__data">Карта **** 3002</p>
        </div>
        <div className="transaction__item__value">- $730</div>
        <img
          src="img/icon/dots-icon.svg"
          className="transaction__item__more"
          alt={'dots-icon.svg'}
        />
      </div>
    </div>
  )
}
