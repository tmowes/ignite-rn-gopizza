import { TextInput } from 'react-native'

import styled, { css } from 'styled-components/native'

import { InputProps } from './types'
import { placeholderColors, variants } from './variants'

export const InputContainer = styled(TextInput).attrs<InputProps>(({ type }) => ({
  placeholderTextColor: placeholderColors[type!],
  // eslint-disable-next-line prettier/prettier
})) <InputProps>`
  max-height: 56px;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 8px 16px;
  margin-bottom: 12px;

  ${({ theme, type, outline }) => css`
    font-family: ${theme.FONTS.TEXT};
    border-width: 1px;
    border-color: ${outline ? theme.COLORS.SHAPE : 'transparent'};
    color: ${variants[type!]};
  `}

  ${({ size }) =>
    size === 'small' &&
    css`
      width: 56px;
      height: 56px;
      text-align: center;
      padding: 0;
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
      flex: 1;
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      width: 100%;
    `};

  ${({ size }) =>
    size === 'multiline' &&
    css`
      height: 80px;
      max-height: 80px;
    `};
`
