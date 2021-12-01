import React from "react";
import { Link } from "react-router-dom";

const CharacterDetails = (props) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        
        <div className="col-md-6">
          <p className="lead">{props.character.description}</p>
          <div className="d-flex">
            <Link className="btn btn-outline-dark flex-shrink-0" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterDetails;
