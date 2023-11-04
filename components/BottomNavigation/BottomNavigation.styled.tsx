import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";
import { TouchableOpacity, View } from "react-native";

export const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.palette.primary};
  padding: ${hp("1.5%")}px ${wp("1.5%")}px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: ${hp("4%")}px ${wp("14%")}px;
  border-radius: ${hp("100%")}px;
`;

export const Wrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${wp("1%")}px;
  padding: ${hp("1%")}px ${wp("5%")}px;
  border-radius: ${hp("10%")}px;
  background-color: ${theme.palette.primary};

  height: ${wp("11%")}px;
  margin: 0 ${wp("1%")}px;
  ${(props) =>
    props.isActive &&
    css`
      background-color: ${theme.palette.secondary};
    `}
`;

export const Text = styled.Text`
  color: ${theme.palette.primary};
  font-size: ${wp("3%")}px;
  font-family: ${theme.fonts.interBold};
`;
