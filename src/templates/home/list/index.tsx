import React, { FC } from "react";
import Card from "@/components/atoms/Card";
import C from "./constants";

const List: FC = () => {
  return (
    <div>
      <h1>{C.title}</h1>
      {C.cards.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          content={card.content}
          author={card.author}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default List;
