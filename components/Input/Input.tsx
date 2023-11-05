import React from "react";
import * as S from "./Input.styled";
import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  borderRadius?: number;
  width?: string;
  usePx?: boolean;
  maxLength?: number;
  removeMargin?: boolean;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  width,
  usePx,
  maxLength,
  removeMargin
}: InputProps) => {
  const handleTextChange = (text: string) => {
    onChangeText(text);
  };

  return (
    <S.InputWrapper removeMargin={removeMargin}>
      {label && <S.InputLabel>{label}</S.InputLabel>}
      <S.InputContainer width={width} usePx={usePx}>
        <S.InputField
          maxLength={maxLength}
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}

        />
      </S.InputContainer>
    </S.InputWrapper>
  );
};
