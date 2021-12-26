import { TextInput } from 'react-native'

import styled, { css } from 'styled-components/native'

import { InputPriceProps } from './types'

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 56px;
    background-color: transparent;
    border-radius: 12px;
    border-width: 1px;
    border-color: ${theme.COLORS.SHAPE};
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
  `}
`
export const Size = styled.View`
  ${({ theme }) => css`
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    border-right-width: 1px;
    border-right-color: ${theme.COLORS.SHAPE};
    margin-right: 16px;
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    line-height: 24px;
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

// eslint-disable-next-line prettier/prettier
export const InputContainer = styled(TextInput) <InputPriceProps>`
  ${({ theme }) => css`
    flex: 1;
    margin-left: 8px;
    font-size: 16px;
    line-height: 16px;
    color: ${theme.COLORS.SECONDARY_900};
  `}
`
