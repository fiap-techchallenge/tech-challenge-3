"use client";

import React, { FC } from "react";
import List from "./list";
import * as S from "./styles";

const HomeTemplate: FC = () => {
  return (
    <div className={S.Container}>
      <div className={S.Content}>
        <List />
      </div>
    </div>
  );
};

export default HomeTemplate;
