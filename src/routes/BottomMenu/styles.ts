import styled, { css } from 'styled-components/native'

import { NotificationsProps, TitleProps } from './types'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text<TitleProps>`
  ${({ theme, color }) => css`
    font-size: 20px;
    line-height: 26px;
    font-family: ${theme.FONTS.TITLE};
    color: ${color};
  `}
`

export const Notifications = styled.View<NotificationsProps>`
  ${({ theme, hasNotifications }) => css`
    height: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 0 12px;
    margin-left: 8px;
    ${hasNotifications &&
    css`
      background-color: ${theme.COLORS.SUCCESS_900};
    `}
    ${!hasNotifications &&
    css`
      background-color: transparent;
      border-width: 1px;
      border-color: ${theme.COLORS.SHAPE};
    `}
  `}
`
export const Quantity = styled.Text<NotificationsProps>`
  ${({ theme, hasNotifications }) => css`
    font-size: 16px;
    line-height: 20px;
    font-family: ${theme.FONTS.TEXT};
    color: ${hasNotifications ? theme.COLORS.TITLE : theme.COLORS.SECONDARY_500};
  `}
`
