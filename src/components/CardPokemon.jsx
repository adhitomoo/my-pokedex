import React from 'react';

const CardPokemon = (props) => {
  return (
    <div className="cards" onClick={props.showDialog}>
      <div className="card-image bg-gray-200 rounded-lg p-4">
        <img src="https://www.seekpng.com/png/full/48-485302_anime-pokemon-png-pic-png-mart-generation-3.png" alt="" />
      </div>

      <div className="card--title py-1">
        <div className="text-gray-400 text-sm mb-2">#{props.series}</div>
        <h4 className="text-2xl mb-4">{props.name}</h4>

        <div className="grid grid-cols-3 gap-2">
          <div className="text-xs bg-indigo-500 text-white rounded-lg text-center py-1 font-bold">Poison</div>
          <div className="text-xs bg-blue-800 text-white rounded-lg text-center py-1 font-bold">Water</div>
        </div>
      </div>
    </div>
  )
}

export default CardPokemon;