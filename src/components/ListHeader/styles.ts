import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 24px 24px 0;
    padding-bottom: 12px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.COLORS.SHAPE};
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    line-height: 24px;
    font-family: ${theme.FONTS.TITLE};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.SECONDARY_900};
  `}
`
