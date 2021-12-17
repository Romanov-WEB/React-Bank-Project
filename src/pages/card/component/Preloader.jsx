import React from 'react'
import 'assets/style/Style.scss'
import scene from '../../../assets/icon/global/scene_4.svg'
import items from '../../../assets/icon/global/item-preloader.svg'

const Preloader = () => {
  console.log('Render Preloader')
  return (
    <div className="preloader__wrapp">
      <img src={scene} className="preloader__img" alt="scene" />
      <p className="preloader__text">Ваши транзакции появятся здесь</p>
      <img src={items} className="preloader__item" alt="items" />
      <img src={items} className="preloader__item" alt="items" />
      <img src={items} className="preloader__item" alt="items" />
      <img src={items} className="preloader__item" alt="items" />
    </div>
  )
}

export default Preloader
