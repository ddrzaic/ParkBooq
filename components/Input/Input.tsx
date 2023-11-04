import React from "react";
import * as S from "./Input.styled";
import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  borderRadius?: number;
  leftChild?: React.ReactNode;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  borderRadius,
  leftChild,
  ...rest
}: InputProps) => {
  const handleTextChange = (text: string) => {
    onChangeText(text);
  };

  return (
    <S.InputWrapper>
      {label && <S.InputLabel>{label}</S.InputLabel>}
      <S.InputContainer borderRadius={borderRadius}>
        {leftChild && leftChild}
        <S.InputField
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}
          {...rest}
        />
      </S.InputContainer>
    </S.InputWrapper>
  );
};
