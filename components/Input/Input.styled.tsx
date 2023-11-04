import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";

export const InputWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InputLabel = styled.Text`
  font-size: ${hp("2%")}px;
  color: ${theme.palette.black};
  padding-bottom: ${hp("2%")}px;
  font-weight: bold;
`;

export const InputContainer = styled.View(
  ({ borderRadius }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${borderRadius ?? hp("2%")}px;
    overflow: hidden;
    background-color: ${theme.palette.background};
  `
);

export const InputError = styled.Text(
  ({}) => css`
    font-size: ${hp("1.5%")}px;
    color: ${theme.palette.danger};
    padding-top: ${hp("1%")}px;
  `
);

export const CurrencySymbol = styled.Text(
  ({}) => css`
    font-size: ${hp("2%")}px;
    color: ${theme.palette.black};
    font-weight: bold;
    margin: 0 ${wp("2%")}px;
  `
);

export const InputField = styled.TextInput.attrs(({}) => ({
  placeholderTextColor: theme.palette.black,
  cursorColor: theme.palette.black,
}))(
  ({}) => css`
    flex: 1;
    padding: ${hp("1.5%")}px ${wp("3%")}px;
    color: ${theme.palette.black};
    font-size: ${hp("2%")}px;
  `
);
