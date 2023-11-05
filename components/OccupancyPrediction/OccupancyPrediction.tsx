import React, { forwardRef } from "react";
import { Pinpoint } from "..";
import * as S from "./OccupancyPrediction.styled";
import { View } from "react-native";

export interface OccupancyPredictionProps {}

const occupancyPredictions = [
  { percentage: 40 },
  { percentage: 65 },
  { percentage: 25 },
  { percentage: 52 },
  { percentage: 55 },
  { percentage: 60 },
  { percentage: 70 },
  { percentage: 80 },
  { percentage: 90 },
  { percentage: 100 },
  { percentage: 100 },
  { percentage: 70, now: true },
  { percentage: 80 },
  { percentage: 90 },
  { percentage: 100 },
  { percentage: 60 },
  { percentage: 70 },
  { percentage: 80 },
  { percentage: 80 },
  { percentage: 90 },
  { percentage: 100 },
  { percentage: 100 },
  { percentage: 70 },
  { percentage: 80 },
];

export const OccupancyPrediction = forwardRef(
  ({}: OccupancyPredictionProps, ref) => {
    return (
      <View>
        <S.BarWrapper>
          {occupancyPredictions.map((prediction, index) => {
            return (
              <S.Bar
                key={index}
                percentage={prediction.percentage}
                now={prediction.now}
              />
            );
          })}
        </S.BarWrapper>
        <S.HoursWrapper>
          <S.HourText></S.HourText>
          <S.HourText>3</S.HourText>
          <S.HourText>6</S.HourText>
          <S.HourText>9</S.HourText>
          <S.HourText>12</S.HourText>
          <S.HourText>15</S.HourText>
          <S.HourText>18</S.HourText>
          <S.HourText>21</S.HourText>
          <S.HourText></S.HourText>
        </S.HoursWrapper>
      </View>
    );
  }
);
