import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

type ButtonProps = {
  isDisabled?: boolean;
};

export const Button = styled.TouchableOpacity<ButtonProps>(
  ({ isDisabled }) => css`
    background-color: ${isDisabled
      ? theme.palette.background
      : theme.palette.primary};

    padding: ${wp("4%")}px ${wp("4%")}px;
    display: flex;
    justify-content: center;
    align-items: center;
  `
);

export const ButtonText = styled.Text<ButtonProps>(
  ({ isDisabled }) => css`
    color: ${isDisabled ? theme.palette.primary : theme.palette.secondary};
    font-weight: bold;
    font-size: ${wp("4%")}px;
  `
);
