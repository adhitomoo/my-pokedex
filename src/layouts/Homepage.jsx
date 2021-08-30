import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

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
                <NavLink className="navbar-brand" to="/">
                  <img src="/pokemon.png" width="320" alt=""></img>
                </NavLink>
              </nav>

              <div className="bg-white rounded-xl">
                <div className="flex justify-center align-center py-10">
                  <ul className="navbar-nav flex">
                    <li className="nav-item active mx-4">
                      <NavLink exact className="nav-link text-xl transition-all pb-2" activeClassName="border-b-2 border-black" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item mx-4">
                      <NavLink exact className="nav-link text-xl transition-all pb-2" activeClassName="border-b-2 border-black" to="/mypokemon">My Pokemon</NavLink>
                    </li>
                  </ul>
                </div>
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
