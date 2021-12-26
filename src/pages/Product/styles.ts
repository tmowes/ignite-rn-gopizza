import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { LinearGradient } from 'expo-linear-gradient'
import styled, { css } from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.COLORS.BACKGROUND};
  `}
`

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: getBottomSpace() + 48 },
})`
  width: 100%;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 24px;
    line-height: 24px;
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.TITLE};
  `}
`

export const UploadSection = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`

export const Form = styled.View`
  width: 100%;
  padding: 24px;
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
export const InputGroup = styled.View`
  width: 100%;
  margin-bottom: 16px;
`

export const InputGroupHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MaxCharacters = styled.Text`
  ${({ theme }) => css`
    font-size: 10px;
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
    margin-bottom: 12px;
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
