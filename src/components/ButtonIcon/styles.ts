import styled, { css } from 'styled-components/native'

import { ContainerProps } from './types'
import { colors } from './variants'

export const Container = styled.TouchableOpacity<ContainerProps>`
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ color }) => colors[color]};
  width: ${({ size }) => (size === 'small' ? 44 : 56)}px;
  height: ${({ size }) => (size === 'small' ? 44 : 56)}px;
  ${({ theme, type }) => css`
    ${type === 'outline' &&
    css`
      border-width: 1px;
      border-color: ${theme.COLORS.PRIMARY_100};
    `}
  `}
`
