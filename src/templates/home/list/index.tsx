import React, { FC, useState } from "react";
import Card from "@/components/atoms/Card";
import Input from "@/components/atoms/Input";
import C from "./constants";
import * as S from "./styles";

const List: FC = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className={S.Container}>
      <div className={S.InputContainer}>
        <Input
          label={C.searchLabel}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={S.CardContainer}>
        {C.cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            content={card.content}
            author={card.author}
            link={card.link}
          />
        ))}
        {C.cards.length === 0 && <p className={S.NoResults}>{C.noResults}</p>}
      </div>
    </div>
  );
};

export default List;
