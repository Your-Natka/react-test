import React from 'react'

export default function GameRow( game = {}) {
  return (
    <li className='game-row'>
      <span className='game-name'>{game.name}</span>
      { game.inWishList && <span className='game-in-whish-list'>В желаемом</span>}
    <GamaGallery images={game.images}/>
    <span className="game-price">{game.price}</span>
    </li>
  )
}
