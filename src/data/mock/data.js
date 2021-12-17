import mastercard from 'assets/icon/global/mastercard-icon.svg'
import visa from 'assets/icon/global/visa-icon.svg'

const data = {
  money: ['Доллар', 'Евро', 'Гривна', 'Рубли'],
  payments: [
    {
      payment: [mastercard, 'Mastercard'],
    },
    {
      payment: [visa, 'Visa'],
    },
  ],
  classPayments: [
    ['Gold', false],
    ['Platinum', true],
    ['Signature', false],
  ],
}

export default data
