import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import BeerDetail from "./components/BeerDetail";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:beerID" component={BeerDetail} />
        <Route
          exact
          path="/random-beer"
          render={props => <BeerDetail isRandom {...props} />}
        />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
