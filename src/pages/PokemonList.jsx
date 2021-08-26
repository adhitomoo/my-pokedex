import React, { Component, Fragment } from 'react';

import CardPokemon from '../components/CardPokemon';
import DialogPokemon from '../components/DialogDetail';

import '../App.scss';

const convertSeries = (val) => {
  let str = "" + val
  let pad = "000"
  return pad.substring(0, pad.length - str.length) + str
}

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.closeDialogHandler = () => {
      this.setState({dialog: false})
    }
    this.state = {
      cards: [
        {
          name: 'Pikachu',
          nickname: 'Pikapika'
        },
        {
          name: 'Charmander',
          nickname: 'charm'
        },
        {
          name: 'Bulbasaur',
          nickname: 'bulb'
        }
      ],
      dialog: false,
    }
    this.showDialogHandler = () => {
      this.setState({dialog: true})
    }
  }
  render() {
    return (
      <Fragment>
        <div className="w-screen-full py-8">
          <div className="container">
            <div className="flex mb-20">
              <input type="text" className="bg-white text-3xl border-b-2 transition-all focus:border-gray-800 focus:border-b-4" placeholder="Search" />
              <button className="icon--button rounded-lg bg-gradient-to-r from-gray-800 to-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {this.state.cards.map((card, index) => <CardPokemon name={card.name} nickname={card.nickname} series={convertSeries(index + 1)} showDialog={() => this.showDialogHandler()} key={index} />)}
            </div>

            <div className="load--section">
              <button className="load--more">
                <span className="text-xl">Load More</span>
              </button>
            </div>
          </div>
        </div>

        { !this.state.dialog ? '' : <DialogPokemon width='720px' closed={() => this.closeDialogHandler()} />}
      </Fragment>
    )
  }
}

export default PokemonList;
