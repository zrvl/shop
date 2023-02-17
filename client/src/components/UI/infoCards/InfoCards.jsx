import React from "react";
import Card from "react-bootstrap/Card";
import infoCard from "./infoCards.module.scss";

const InfoCards = () => {
  return (
    <div className={infoCard.wrapper}>
      <Card className={infoCard.card} style={{ backgroundColor: "#FFFCE8" }}>
        <Card.Body className={infoCard.body}>
          <Card.Title className={infoCard.title}>Card Title</Card.Title>
          <Card.Text className={infoCard.text}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className={infoCard.card} style={{ backgroundColor: "#EBFDFF" }}>
        <Card.Body className={infoCard.body}>
          <Card.Title className={infoCard.title}>Працюємо щоденно</Card.Title>
          <Card.Text className={infoCard.text}>
            Працюємо з 8:00 до 16:00
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className={infoCard.card} style={{ backgroundColor: "#EAF5E4" }}>
        <Card.Body className={infoCard.body}>
          <Card.Title className={infoCard.title}>
            Безкоштовна доставка.
          </Card.Title>
          <Card.Text className={infoCard.text}>
            Безкоштовна доставка по області на сумму від 5000 грн.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InfoCards;
