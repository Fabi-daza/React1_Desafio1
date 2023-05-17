import React from 'react'

const Card = ({title, url, description}) => {
  return (
    <div className='Card-Style'>
        <img src={url} alt="" />
        <div className="Card-Text">
        <h1>{title}</h1>
        <p>{description}</p>
        </div> 
    </div>
  )
}

export default Card