import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button";
import { CardProps } from "./props";
import * as S from "./styles";

const Card: FC<CardProps> = ({ title, content, author, link }) => {
  const router = useRouter();

  return (
    <div className={S.Container}>
      <h2 className={S.Title}>{title}</h2>
      <p className={S.Content}>{content}</p>
      <p className={S.Author}>{author}</p>
      <Button onClick={() => router.push(link)}>Ler Mais</Button>
    </div>
  );
};

export default Card;
