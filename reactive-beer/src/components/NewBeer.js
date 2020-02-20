import React from "react";
import axios from "axios";
import Navbar from "./Navbar";

class NewBeer extends React.Component {
  state = {
    name: "",
    tagline: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  };

  createBeer = event => {
    event.preventDefault();
    axios
      .post(`https://ih-beer-api.herokuapp.com/beers/new`, this.state)
      .then(response => {
        console.log(response);
        this.props.history.push("/beers");
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.createBeer}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                name="name"
                type="text"
                value={this.state.name}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Tagline</label>
            <div className="control">
              <input
                className="input"
                name="tagline"
                type="text"
                value={this.state.tagline}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">First Brewed</label>
            <div className="control">
              <input
                className="input"
                name="first_brewed"
                type="text"
                value={this.state.first_brewed}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Brewers Tips</label>
            <div className="control">
              <input
                className="input"
                name="brewers_tips"
                type="text"
                value={this.state.brewers_tips}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">attenuation_level</label>
            <div className="control">
              <input
                className="input"
                name="attenuation_level"
                type="number"
                value={this.state.attenuation_level}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Contributor</label>
            <div className="control">
              <input
                className="input"
                name="contributed_by"
                type="text"
                value={this.state.contributed_by}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </div>

          <button className="button is-link" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
