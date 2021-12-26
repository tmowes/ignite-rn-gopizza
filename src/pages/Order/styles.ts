import styled, { css } from 'styled-components/native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { LinearGradient } from 'expo-linear-gradient'

const DESLOC_Y = -128

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: getBottomSpace() + 100 },
})`
  width: 100%;
`

export const ProductPhoto = styled.Image`
  width: 256px;
  height: 256px;
  border-radius: 128px;
  margin: 0 auto;
  position: relative;
  top: ${DESLOC_Y}px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
    margin-bottom: 24px;
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    line-height: 24px;
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
    margin-bottom: 12px;
  `}
`

export const Form = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${DESLOC_Y}px;
`

export const FormRow = styled.View`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${theme.COLORS.BACKGROUND};
    margin-bottom: 16px;
  `}
`

export const InputGroup = styled.View`
  width: 48%;
`

export const ActionContainer = styled.View`
  ${({ theme }) => css`
    width: 100%;
    position: absolute;
    bottom: ${getBottomSpace()}px;
    padding: 0 24px 16px;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`

export const Price = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    line-height: 18px;
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
    margin-left: auto;
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
  padding: ${getStatusBarHeight() + 16}px 24px 64px;
`
