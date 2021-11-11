import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card-container'>
      <img alt="robohash" src={`https://robohash.org/${props.marvel.id}?set=set2&size=180x180`} />
      <h2> {props.marvel.name} </h2>
    </div>
  )
}

export default Card
