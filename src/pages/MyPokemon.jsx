import React, { Component, Fragment } from 'react';

import CardPokemon from '../components/CardPokemon';
import DialogPokemon from '../components/DialogDetail';

import '../App.scss';

class PokemonList extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     mypokemon: [],
  //   }
  // }

  pokemonHandler() {
    let pokemon = JSON.parse(localStorage.getItem('pokemon'));
    return pokemon;
  }

  componentDidMount = () => {
    // let data = JSON.parse(localStorage.getItem('pokemon'));
    // this.setState({ mypokemon: [Object.assign(this.state.mypokemon, data)] });
    // console.log(this.state.mypokemon);
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
                <CardPokemon key={index} name={pokemon.name} nickname={pokemon.nickname} isHaveNickname={true} series={index + 1} />
              )}
            </div>
          </div>
        </div>

        {/* {this.state.dialog === false ? '' :
          <DialogPokemon
            width='920px'
            min-height='100vh'
            detail={this.state.detail}
            closed={() => this.closeDialogHandler()}
          />} */}
      </Fragment>
    )
  }
}

export default PokemonList;
