import React, { Component, Fragment } from 'react';

import CardPokemon from '../components/CardPokemon';
import DialogPokemon from '../components/DialogDetail';

import '../App.scss';

class PokemonList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mypokemon: [
        {
          name: 'bedrill',
          height: '7m'
        }
      ],
    }
  }

  // componentDidMount = () => {
  //   let data = JSON.parse(localStorage.getItem('pokemon'));
  //   this.setState({ mypokemon: [Object.assign(this.state.mypokemon, data)] });
  //   console.log(this.state.mypokemon);
  // }

  render() {
    return (
      <Fragment>
        <div className="w-screen-full py-8">
          <div className="container">
            <div className="flex mb-10">
              <div className="text-xl">Pokemon : {this.state.mypokemon.length}</div>
            </div>

            <div>{ this.state.mypokemon[0].name }</div>

            {/* <div className="grid grid-cols-1 md:grid-cols-4 md:grid-cols-1 gap-4">
              {this.state.mypokemon.map((pokemon, index) =>
              <div> { pokemon.name } </div>
                <CardPokemon name={pokemon.name} />
              )}
            </div> */}
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
