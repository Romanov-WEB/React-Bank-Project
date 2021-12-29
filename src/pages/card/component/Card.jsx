import React from 'react'
import 'assets/style/Style.scss'
import { Link } from 'react-router-dom'
import ItemCard from './ItemCard'
import Transaction from './Transaction'
import DataCard from 'store/getCard/DataCard'

const Card = () => {
  console.log('Render Card')
  
  const [currentIndex, setCurrentIndex] = React.useState(null)

  const toggleCard = (index) => {
    setCurrentIndex(index)
    if (currentIndex === index) {
      setCurrentIndex(null)
    }
  }


  const itemsCard = DataCard.data.map((item, index) => {
    return (
      <ItemCard
        toggleCard={toggleCard}
        index={index}
        openCard={currentIndex === index}
        prop={item}
        key={index}
      />
    )
  })

  return (
    <div className="main__info__section__wrapp">
      <article className="cards__info__layout">
        <div className="scroll"> {itemsCard} </div>
        <Link to="/issue" className="create__card__button">
          Выпустить новую карту
        </Link>
      </article>
      <Transaction />
    </div>
  )
}

export default Card
