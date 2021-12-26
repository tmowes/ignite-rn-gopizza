import styled from 'styled-components/native'

import { ContainerProps } from './types'
import { variants } from './variants'

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ type }) => variants[type!]};
`

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.TITLE};
  /* margin-left: 7px; */
`

export const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TITLE,
  size: 'large',
}))``
