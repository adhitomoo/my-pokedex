import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PokemonList from '../pages/PokemonList';
import MyPokemon from '../pages/MyPokemon';


class Homepage extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div style={{ backgroundImage: "url(/back--home.jpg)", height: '100%' }}>
            <div className="container max-w-screen-lg m-auto">
              <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-success py-6 flex justify-center">
                <Link className="navbar-brand" to="/">
                  <img src="/pokemon.png" width="320" alt=""></img>
                </Link>
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mypokemon">My Pokemon</Link>
                  </li>
                </ul>
              </nav>

              <div className="bg-white rounded-xl">
                <Route path="/" exact component={PokemonList}></Route>
                <Route path="/mypokemon" exact component={MyPokemon}></Route>
              </div>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default Homepage;
