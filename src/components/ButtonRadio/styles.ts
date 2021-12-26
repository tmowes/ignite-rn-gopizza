import { Dimensions } from 'react-native'

import styled, { css } from 'styled-components/native'

import { ContainerProps } from './types'

const { width } = Dimensions.get('window')

const SIZE = width / 3 - 24

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, selected }) => css`
    width: ${SIZE}px;
    height: 100px;
    padding: 12px 16px;
    border-radius: 12px;
    border-width: 1px;
    border-color: ${selected ? theme.COLORS.SUCCESS_900 : theme.COLORS.SHAPE};
    background-color: ${selected ? theme.COLORS.SUCCESS_50 : theme.COLORS.TITLE};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    line-height: 20px;
    margin-top: auto;
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`
export const RadioOuter = styled.View`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${theme.COLORS.SECONDARY_900};
    align-items: center;
    justify-content: center;
  `}
`

export const RadioInner = styled.View`
  ${({ theme }) => css`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${theme.COLORS.SUCCESS_900};
  `}
`
