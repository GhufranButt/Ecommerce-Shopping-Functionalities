import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const titleWords = props.title.split(" ").slice(0, 3).join(" ");
  // console.log("titleWords", titleWords);
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{titleWords}</h5>
        {/* <p className="card-text">{props.desc.slice(0, 50)}</p> */}
        <Link to={`/card/${props.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
