import React from 'react'
import Card from '../Card/Card'
import './CardList.css'
const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.marvels.map(hero => (
           <Card key={hero.id} marvel={hero}/> 
         ))}
    </div>
  )
}

export default CardList
