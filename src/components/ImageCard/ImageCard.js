import React from "react";
import "./ImageCard.css";
// import "./components/Clicker";

const ImageCard = props => (
  <div className="card" onClick={() => props.removeCard(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default ImageCard;
