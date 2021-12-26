import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  margin-top: -16px;
`

export const InputArea = styled.View`
  ${({ theme }) => css`
    flex: 1;
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    background-color: ${theme.COLORS.TITLE};
    border-width: 1px;
    border-color: ${theme.COLORS.SHAPE};
    margin-right: 8px;
    overflow: hidden;
  `}
`
