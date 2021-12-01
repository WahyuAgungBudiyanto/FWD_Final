import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";

const CharacterItem = (props) => {
  return (
    <div className="col mb-4">
      <CardGroup className="card h-100 shadow">
        <Card>
          <Link to={`/details/${props.character.id}/`}>
            <Card.Img variant="top" src={props.character.thumbnail.path + "." + props.character.thumbnail.extension} alt={props.name} />
          </Link>
          <Card.Body>
            <Card.Title>{props.character.name}</Card.Title>
            <Card.Text style={{ width: "150", height: "25px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{props.character.description}</Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer> */}
        </Card>
      </CardGroup>
    </div>
  );
};

export default CharacterItem;
