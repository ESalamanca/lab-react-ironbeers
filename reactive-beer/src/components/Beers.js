import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import BeerComponent from "./BeerComponent";

class Beers extends React.Component {
  state = {
    beers: [],
    query: ""
  };

  componentDidMount() {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        this.setState({ beers: response.data.splice(0, 100) });
        console.log(response.data);
      })
      .catch(err => console.error(err));
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/search?q=${value}`)
      .then(response => {
        this.setState({ beers: response.data });
        console.log(response.data);
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="all-beers">
        <Navbar />
        <div className="search-bar">
          <label>Search Beer</label>
          <input
            name="query"
            type="text"
            value={this.state.query}
            onChange={e => this.handleChange(e)}
          />
        </div>

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
