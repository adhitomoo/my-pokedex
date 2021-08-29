import React from 'react';

const CardPokemon = (props) => {
  return (
    <div className="cards mb-4">
      <div className="card-image bg-gray-200 rounded-lg p-4 flex justify-center">
        <img src={`https://img.pokemondb.net/artwork/large/${props.name}.jpg`} style={ {height: '220px'}} loading="lazy" alt="" />
      </div>

      <div className="card--title py-1">
        <div className="text-gray-400 text-sm mb-2">#{props.series}</div>
        <h4 className="text-2xl mb-4 capitalize">{props.name}</h4>
      </div>
    </div>
  )
}

export default CardPokemon;