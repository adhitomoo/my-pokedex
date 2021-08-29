import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PokemonList from '../pages/PokemonList';

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
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </nav>

              <div className="h-screen bg-white rounded-xl">
                <Route path="/" exact component={PokemonList}></Route>
              </div>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default Homepage;
