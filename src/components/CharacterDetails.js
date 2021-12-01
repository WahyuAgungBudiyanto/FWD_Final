import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CharacterDetails = (props) => {
  console.log(props);
  const { charId } = useParams();
  if (props.characters.data) {
    var resultnya = props.characters.data.results[0];
    return (
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="col-md-6">
            <img className="card-img-top mb-5 mb-md-0" src={resultnya.thumbnail.path + "." + resultnya.thumbnail.extension} alt={props.name} />
          </div>
          <div className="col-md-6">
            <h1 className="display-5 fw-bolder">{resultnya.name}</h1>

            <p className="lead">{resultnya.description}</p>
            <div className="d-flex">
              <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return "1";
};

export default CharacterDetails;
