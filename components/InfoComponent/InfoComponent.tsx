import React, { useRef } from "react";
import * as S from "./InfoComponent.styled";
import { Text } from "react-native";


type InfoComponentProps = {
  content: React.ReactNode;
};


export const InfoComponent = ({
  content
}: InfoComponentProps) => {

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const onOpen = () => {
    setIsDrawerOpen(true);
  };

  return (
    <S.Container>
     {content}
    </S.Container>
  );
};
