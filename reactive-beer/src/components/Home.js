import React from "react";

import Navbar from "./Navbar";
import HomeComponent from "./HomeComponent";

const Home = props => {
  return (
    <div className="home-page">
      <Navbar isHome />

      <HomeComponent img="img/beers.png" title="All Beers" link="/beers" />

      <HomeComponent
        img="img/random-beer.png"
        title="Random Beer"
        link="/random-beer"
      />

      <HomeComponent img="img/new-beer.png" title="New Beer" link="/new-beer" />
    </div>
  );
};

export default Home;
