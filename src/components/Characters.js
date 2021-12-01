import React, { useState, useEffect } from "react";
import CharacterItem from "./CharacterItem";
import { Form, InputGroup } from "react-bootstrap";

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    //display data
    fetch("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f1698f16039e961fc54d26df5fc42a45&hash=64deefa1d0cc0e6f4be0bfa6c27a9abd")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.data.results);
      });

    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //search data
    fetch(`https://gateway.marvel.com/v1/public/characters/${text}?ts=1&apikey=f1698f16039e961fc54d26df5fc42a45&hash=64deefa1d0cc0e6f4be0bfa6c27a9abd`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });

    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section className="py-5">
      <div className="container">
        <h2>MARVEL CHARACTERS LIST</h2>
      </div>
      <div className="container px-4 shadow px-lg-5 mt-5">
        <form onSubmit={handleSubmit}>
          <InputGroup className="pt-3">
            <Form.Control type="text" placeholder="Search Marvel Character..." onChange={handleChange} value={text} required />
          </InputGroup>
        </form>

        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify my-3">
          {characters.map((character) => (
            <CharacterItem key={character.id} character={character} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Character;
