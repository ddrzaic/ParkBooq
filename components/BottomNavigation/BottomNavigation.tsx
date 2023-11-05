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
  displayDrawerHandle?: boolean;
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
  displayDrawerHandle = false,

}: BottomNavigationProps) => {
  const modalizeRef = useRef<Modalize>(null);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const onOpen = () => {
    modalizeRef.current?.open();
    setIsDrawerOpen(true);
  };

  return (
    <S.Container>
      {!isDrawerOpen && displayDrawerHandle && (
      <S.DrawerHandleBackground onPressIn={onOpen}>
        <S.DrawerHandle />
      </S.DrawerHandleBackground>
      )}

      <S.StyledModalize

        onClose={() => {setIsDrawerOpen(false)}}
        handlePosition="inside"
        ref={modalizeRef}
        disableScrollIfPossible={false}
        scrollViewProps={{
          showsVerticalScrollIndicator: true,
          showsHorizontalScrollIndicator: true,
        }}
        adjustToContentHeight
        overlayStyle={{ display: "none" }}
        rootStyle={{ zIndex: -1000 }}
        modalStyle={{
          backgroundColor: theme.palette.primary,
          marginBottom: hp("0%"),
          opacity: 0.8,
          zIndex: -1000,
          borderRadius: hp("4%"),
          borderTopLeftRadius: hp("4%"),
          borderTopRightRadius: hp("4%"),
        }}
        childrenStyle={{ height: hp("40%") }}
        handleStyle={{ backgroundColor: "white" }}
      >
        {drawerContent}
      </S.StyledModalize>

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
