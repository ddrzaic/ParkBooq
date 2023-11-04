import React, { useRef } from "react";
import * as S from "./BottomNavigation.styled";
import { MapIcon, StarIcon } from "../Icons";
import { ProfileIcon } from "../Icons/ProfileIcon";
import { theme } from "../../config/theme.config";
import { BottomNavigationEnum } from "../../helpers/const";

import { Modalize } from "react-native-modalize";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

type BottomNavigationProps = {
  active: BottomNavigationEnum;
  onChange: (value: BottomNavigationEnum) => void;
  drawerContent: React.ReactNode;
};

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

export const BottomNavigation = ({
  active,
  onChange,
  drawerContent,
}: BottomNavigationProps) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <S.Container>
      <S.DrawerHandleBackground onPressIn={onOpen}>
        <S.DrawerHandle />
      </S.DrawerHandleBackground>

      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        childrenStyle={{ height: hp("80%") }}
      >
        {drawerContent}
      </Modalize>

      <Button
        isActive={active === BottomNavigationEnum.MAP}
        onPress={() => {
          onChange(BottomNavigationEnum.MAP);
        }}
      >
        <MapIcon color={getIconColor(active === BottomNavigationEnum.MAP)} />
        {active === BottomNavigationEnum.MAP && <S.Text>Map</S.Text>}
      </Button>

      <Button
        isActive={active === BottomNavigationEnum.FAVORITES}
        onPress={() => {
          onChange(BottomNavigationEnum.FAVORITES);
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
          onChange(BottomNavigationEnum.PROFILE);
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
