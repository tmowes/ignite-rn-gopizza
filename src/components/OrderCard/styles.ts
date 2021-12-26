import styled, { css } from 'styled-components/native'

import { ContainerProps, StatusTypesProps } from './types'
import { variantsStatus } from './variants'

export const Container = styled.TouchableOpacity<ContainerProps>`
  ${({ theme, index }) => css`
    width: 50%;
    align-items: center;
    padding: 24px;
    border-right-width: ${index % 2 > 0 ? 0 : 1}px;
    border-color: ${theme.COLORS.SHAPE};
  `}
`

export const ProductPhoto = styled.Image`
  width: 112px;
  height: 112px;
  border-radius: 56px;
`

export const Name = styled.Text`
  ${({ theme }) => css`
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
  `}
`
export const Status = styled.View<{ status: StatusTypesProps }>`
  ${({ status }) => css`
    padding: 4px 16px;
    margin-top: 12px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border-width: 1px;
    ${variantsStatus[status]};
  `}
`

export const StatusText = styled.Text<{ status: StatusTypesProps }>`
  ${({ theme, status }) => css`
    font-size: 12px;
    line-height: 20px;
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.TITLE};
    ${variantsStatus[status]};
  `}
`
