import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CharacterDetails from "../components/CharacterDetails";

const Details = () => {
  const [characters, setCharacters] = useState({});
  const { charId } = useParams();
  useEffect(
    () => {
      // hit TMDB endpoint to get details of a movie
      fetch(`https://gateway.marvel.com/v1/public/characters/${charId}?ts=1&apikey=f1698f16039e961fc54d26df5fc42a45&hash=64deefa1d0cc0e6f4be0bfa6c27a9abd`)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data);
        });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <Navigation />
      <CharacterDetails characters={characters} />
      <Footer />
    </>
  );
};

export default Details;
