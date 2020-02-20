import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = props => {
  return (
    <div className="home-component">
      <Link to={props.link} style={{ textDecoration: "none" }}>
        <img src={props.img} alt={props.title} />
        <h2> {props.title}</h2>
      </Link>
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        bibendum nisl sit amet urna interdum, dictum bibendum nunc suscipit.
        Cras tincidunt interdum facilisis. Cras posuere nisl accumsan, hendrerit
        sapien eu, auctor felis.
      </p>
    </div>
  );
};

export default HomeComponent;
