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
      load: false,
      count: 0,
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
    this.setState({ load: true })
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.state.limit}`)
    const data = await response.json();
    await this.setState({ load: false })
    this.setState({
      cards: data.results,
    });
    this.setState({
      count: data.count,
    });
  }
  getPokemon = async (val) => {
    const response = await fetch(val)
    const data = await response.json();
    this.setState({ detail: data })
  }
  loadHandler = () => {
    this.setState({ limit: this.state.limit += 8 })
    this.listPokemon();
  }

  showDialogHandler = async (val) => {
    await this.getPokemon(val);
    this.setState({ dialog: true })
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
              <div className="text-xl">Total Pokemon : {this.state.count}</div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {this.state.cards.map((card, index) =>
                <button key={index} onClick={() => this.showDialogHandler(card.url)}>
                  <CardPokemon name={card.name} series={convertSeries(index + 1)} />
                </button>)}
            </div>

            <div className="load--section">
              <button className="load--more" onClick={() => this.loadHandler()}>
                <div className="flex items-center">
                  {this.state.load === true ? <img className="w-8 h-8" src="/loader.svg" alt="" /> : <span className="text-xl">Load More</span> }
                </div>
              </button>
            </div>
          </div>
        </div>

        {this.state.dialog === false ? '' :
          <DialogPokemon
            width='920px'
            detail={this.state.detail}
            closed={() => this.closeDialogHandler()}
          />}
      </Fragment>
    )
  }
}

export default PokemonList;
