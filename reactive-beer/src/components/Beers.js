import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import BeerComponent from "./BeerComponent";

class Beers extends React.Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        this.setState({ beers: response.data });
        console.log(response.data);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="all-beers">
        <Navbar />
        <div>
          {this.state.beers.length === 0 ? (
            <h1>Loading</h1>
          ) : (
            this.state.beers
              .filter(beer => beer.contributed_by)
              .map(beer => <BeerComponent key={beer._id} {...beer} />)
          )}
        </div>
      </div>
    );
  }
}

export default Beers;
