import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Jumbo = ({ imageUrl, title, text, btnUrl, btnText }) => {
  const addBackground = {
    backgroundImage: imageUrl,
    backgroundSize: "cover",
  };

  return (
    <Jumbotron style={addBackground}>
      <h3>{title}</h3>
      <p>
        <Button href={btnUrl} variant="primary" size="lg">
          {btnText}
        </Button>
        {text}
      </p>
    </Jumbotron>
  );
};

export default Jumbo;
