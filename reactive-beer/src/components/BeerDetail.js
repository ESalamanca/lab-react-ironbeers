import React from "react";
import axios from "axios";
import Navbar from "./Navbar";

class BeerDetail extends React.Component {
  state = {};

  componentDidMount() {
    this.props.isRandom ? this.getRandomBeer() : this.getSingleBeer();
  }

  getSingleBeer = () => {
    const { params } = this.props.match;

    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${params.beerID}`)
      .then(responseFromApi => {
        const oneBeer = responseFromApi.data;
        this.setState(oneBeer);
      })
      .catch(err => console.log(err));
  };

  getRandomBeer = () => {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        const oneBeer = responseFromApi.data;
        this.setState(oneBeer);
        console.log("RandomBeer", oneBeer);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />

        {!this.state ? (
          <p>LOADING</p>
        ) : (
          <div className="beer-detail">
            <img src={this.state.image_url} alt="Beer"></img>

            <div className="beer-detail-description">
              <div className="row">
                <h1>{this.state.name}</h1>
                <span className="ibu">{this.state.attenuation_level}</span>
              </div>
              <div className="row">
                <h2 className="beer-detail-tagline">{this.state.tagline}</h2>
                <span className="brewed">{this.state.first_brewed}</span>
              </div>
              <p>{this.state.description}</p>
              <p className="contributor">{this.state.contributed_by}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BeerDetail;
