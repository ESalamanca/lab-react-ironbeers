import React from "react";
import { Link } from "react-router-dom";

const BeerComponent = props => {
  return (
    <div className="beer-item">
      <div className="beer-image">
        <img src={props.image_url} alt="Beer"></img>
      </div>

      <div className="beer-description">
        <Link to={`beers/${props._id}`} style={{ textDecoration: "none" }}>
          <h3>{props.name}</h3>
        </Link>
        <p className="tagline">{props.tagline}</p>
        <p>Created by : {props.contributed_by}</p>
      </div>
    </div>
  );
};

export default BeerComponent;
