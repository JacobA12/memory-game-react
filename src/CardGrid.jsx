import React, { useState } from "react";
import Card from "./Card";
import Arrokuda from "./assets/images/Arrokuda.png";
import Cinderance from "./assets/images/Cinderace.png";
import Clefable from "./assets/images/Clefable.png";
import Cobalion from "./assets/images/Cobalion.png";
import Drampa from "./assets/images/Drampa.png";
import Golett from "./assets/images/Golett.png";
import Gumshoos from "./assets/images/Gumshoos.png";
import Hydrapple from "./assets/images/Hydrapple.png";
import Kingdra from "./assets/images/Kingdra.png";
import Krookodile from "./assets/images/Krookodile.png";
import Psyduck from "./assets/images/Psyduck.png";
import Shieldon from "./assets/images/Shieldon.png";
import PropTypes from "prop-types";
import "./styles/CardGrid.css";

const CardGrid = (props) => {
  const cards = [
    { image: Arrokuda, name: "Arrokuda" },
    { image: Cinderance, name: "Cinderance" },
    { image: Clefable, name: "Clefable" },
    { image: Cobalion, name: "Cobalion" },
    { image: Drampa, name: "Drampa" },
    { image: Golett, name: "Golett" },
    { image: Gumshoos, name: "Gumshoos" },
    { image: Hydrapple, name: "Hydrapple" },
    { image: Kingdra, name: "Kingdra" },
    { image: Krookodile, name: "Krookodile" },
    { image: Psyduck, name: "Psyduck" },
    { image: Shieldon, name: "Shieldon" },
  ];

  const [positions, setPositions] = useState(
    cards.map((value, index) => index)
  );

  const shuffleArray = (array) => {
    let shuffledArray = array.slice(0);
    for (let i = 0; i < shuffledArray.length; i++) {
      const j = Math.floor(Math.random() * shuffledArray.length);
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const randomizeCards = () => {
    setPositions(shuffleArray(positions));
  };

  return (
    <div id="card-grid">
      {positions.map((position) => {
        return (
          <Card
            key={cards[position].name}
            image={cards[position].image}
            name={cards[position].name}
            reset={props.reset}
            endCurrentStage={props.endCurrentStage}
            incrementScore={props.incrementScore}
            randomizeCards={randomizeCards}
          />
        );
      })}
    </div>
  );
};

CardGrid.propTypes = {
  reset: PropTypes.bool,
  endCurrentStage: PropTypes.func,
  incrementScore: PropTypes.func,
};

export default CardGrid;
