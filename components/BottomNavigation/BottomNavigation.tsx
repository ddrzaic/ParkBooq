import React from "react";
import * as S from "./BottomNavigation.styled";
import { MapIcon, StarIcon } from "../Icons";
import { ProfileIcon } from "../Icons/ProfileIcon";
import { theme } from "../../config/theme.config";

type BottomNavigationProps = {};

type ButtonProps = {
  isActive: boolean;
  children: React.ReactNode;
  onPress: () => void;
};

const Button = ({ isActive, children, onPress }: ButtonProps) => {
  return (
    <S.Wrapper isActive={isActive} onPress={onPress}>
      {children}
    </S.Wrapper>
  );
};

const getIconColor = (isActive: boolean) => {
  if (isActive) {
    return theme.palette.primary;
  }

  return theme.palette.white;
};

enum BottomNavigationEnum {
  MAP,
  FAVORITES,
  PROFILE,
}

export const BottomNavigation = () => {
  const [active, setActive] = React.useState(BottomNavigationEnum.MAP);

  return (
    <S.Container>
      <Button
        isActive={active === BottomNavigationEnum.MAP}
        onPress={() => {
          setActive(BottomNavigationEnum.MAP);
        }}
      >
        <MapIcon color={getIconColor(active === BottomNavigationEnum.MAP)} />
        {active === BottomNavigationEnum.MAP && <S.Text>Map</S.Text>}
      </Button>

      <Button
        isActive={active === BottomNavigationEnum.FAVORITES}
        onPress={() => {
          setActive(BottomNavigationEnum.FAVORITES);
        }}
      >
        <StarIcon
          color={getIconColor(active === BottomNavigationEnum.FAVORITES)}
        />
        {active === BottomNavigationEnum.FAVORITES && (
          <S.Text>Favorites</S.Text>
        )}
      </Button>

      <Button
        isActive={active === BottomNavigationEnum.PROFILE}
        onPress={() => {
          setActive(BottomNavigationEnum.PROFILE);
        }}
      >
        <ProfileIcon
          color={getIconColor(active === BottomNavigationEnum.PROFILE)}
        />
        {active === BottomNavigationEnum.PROFILE && <S.Text>Profile</S.Text>}
      </Button>
    </S.Container>
  );
};
