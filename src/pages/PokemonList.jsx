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
    this.state = {
      cards: [],
      detail: {},
      selectedPokemon: 0,
      dialog: false,
      limit: 8,
    }
    this.showDialogHandler = this.showDialogHandler.bind(this);
    this.closeDialogHandler = this.closeDialogHandler.bind(this);

    this.loadHandler = this.loadHandler.bind(this);
  }

  
  componentDidMount = () => {
    this.listPokemon();
  }
  listPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.state.limit}`)
    const data = await response.json();
    this.setState({
      cards: data.results,
    });
  }
  getPokemon = async (val) => {
    const response = await fetch(val)
    const data = await response.json();
    this.setState({ detail: data })
    console.log(this.state.detail)
  }
  loadHandler = () => {
    this.setState({ limit: this.state.limit += 8 })
    this.listPokemon();
  }
  
  showDialogHandler = async (val) => {
    await this.getPokemon(val);
    this.setState({ dialog: true })
    console.log('Test', this.state.detail);
  }
  closeDialogHandler = () => {
    this.setState({ dialog: false })
  }

  render() {
    return (
      <Fragment>
        <div className="w-screen-full py-8">
          <div className="container">
            <div className="flex mb-10">
              <input type="text" className="bg-white text-3xl border-b-2 transition-all focus:border-gray-800 focus:border-b-4" placeholder="Search" />
              <button className="icon--button rounded-lg bg-gradient-to-r from-gray-800 to-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {this.state.cards.map((card, index) =>
                <button key={index} onClick={() => this.showDialogHandler(card.url)}>
                  <CardPokemon name={card.name} series={convertSeries(index + 1)} />
                </button>)}
            </div>

            <div>{this.state.detail && this.state.detail.sprites ? this.state.detail.sprites.back_default : ''}</div>
            <div>{this.state.detail.name}</div>

            <div className="load--section">
              <button className="load--more" onClick={() => this.loadHandler()}>
                <span className="text-xl">Load More</span>
              </button>
            </div>
          </div>
        </div>

        {this.state.dialog === false ? '' :
          <DialogPokemon
            width='920px'
            pokemonName={this.state.detail.name}
            detail={this.state.detail}
            // type={this.state.detail.types}
            // images={this.state.detail && this.state.detail.sprites ? this.state.detail.sprites.front_default : ''}
            closed={() => this.closeDialogHandler()}
          />}
      </Fragment>
    )
  }
}

export default PokemonList;
