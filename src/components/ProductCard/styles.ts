import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`
export const Content = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`

export const ProductPhoto = styled.Image`
  width: 112px;
  height: 112px;
  border-radius: 56px;
  margin-right: 16px;
`

export const Details = styled.View`
  flex: 1;
`

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Name = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-size: 18px;
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    line-height: 24px;
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_400};
    margin-right: 16px;
  `}
`

export const Line = styled.View`
  height: 1px;
  width: 63%;
  margin: 12px 0 12px 128px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`
