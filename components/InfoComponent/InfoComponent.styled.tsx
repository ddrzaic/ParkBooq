import styled, { css } from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../../config/theme.config";
import { TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";

export const Container = styled(View)`
  height: ${hp("40%")}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(56, 113, 224, 0.7);
  padding: ${hp("0%")}px ${wp("1.5%")}px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: ${hp("13%")}px ${wp("8%")}px;
  border-radius: ${hp("3%")}px;
  z-index: 1000;
`;
