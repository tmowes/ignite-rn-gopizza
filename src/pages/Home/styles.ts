import styled, { css } from 'styled-components/native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    line-height: 32px;
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE};
  `}
`

export const ActionContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    bottom: ${getBottomSpace()}px;
    padding: 8px 24px 16px;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${getStatusBarHeight() + 16}px 24px 32px;
`
