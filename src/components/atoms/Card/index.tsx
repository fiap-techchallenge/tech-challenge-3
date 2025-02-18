import React, { FC } from "react";
import { CardProps } from "./props";

const Card: FC<CardProps> = ({ title, content, author, link }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{author}</p>
      <a href={link}>Read more</a>
    </div>
  );
};

export default Card;
