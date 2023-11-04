import React from "react";
import * as S from "./Input.styled";
import { InputProps } from "./Input";
import { Currency } from "../../../types";

export interface MoneyInputProps extends InputProps {
  currency?: Currency;
}

export const MoneyInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  currency,
  ...rest
}: MoneyInputProps) => {
  const handleTextChange = (text: string) => {
    onChangeText(text);
  };

  return (
    <S.InputWrapper>
      {label && <S.InputLabel>{label}</S.InputLabel>}
      <S.InputContainer>
        <S.InputField
          placeholder={placeholder}
          value={value}
          onChangeText={handleTextChange}
          {...rest}
        />
        <S.CurrencySymbol>{currency?.symbol}</S.CurrencySymbol>
      </S.InputContainer>
    </S.InputWrapper>
  );
};
