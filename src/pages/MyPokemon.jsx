import React, { Component, Fragment } from 'react';

import CardPokemon from '../components/CardPokemon';
import DialogPokemon from '../components/DialogDetail';

import '../App.scss';

class PokemonList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detailPokemon: {},
      dialog: false,
    }
    this.showDialogHandler = this.showDialogHandler.bind(this);
    this.closeDialogHandler = this.closeDialogHandler.bind(this);
  }

  pokemonHandler() {
    let pokemon = JSON.parse(localStorage.getItem('pokemon'));
    return pokemon;
  }
  showDialogHandler = async(val) => {
    await this.getPokemon(val);
    this.setState({ dialog: true })
  }
  closeDialogHandler = () => {
    this.setState({ dialog: false })
  }

  getPokemon = async (val) => {
    const response = await fetch(val)
    const data = await response.json();
    this.setState({ detailPokemon: data })
  }
 
  componentDidMount = () => {
    this.pokemonHandler();
  }

  render() {
    return (
      <Fragment>
        <div className="w-screen-full py-8">
          <div className="container">
            <div className="flex mb-10">
              <div className="text-xl">Pokemon : {this.pokemonHandler().length}</div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-cols-1 gap-4">
              {this.pokemonHandler().map((pokemon, index) =>
                <button key={index} onClick={() => this.showDialogHandler(pokemon.url)}>
                  <CardPokemon name={pokemon.name} nickname={pokemon.nickname} isHaveNickname={true} series={index + 1} />
                </button>
              )}
            </div>
          </div>
        </div>

        {this.state.dialog === false ? '' :
          <DialogPokemon
            width='920px'
            min-height='100vh'
            isDidCatch={true}
            detail={this.state.detailPokemon}
            closed={() => this.closeDialogHandler()}
          />}
      </Fragment>
    )
  }
}

export default PokemonList;
