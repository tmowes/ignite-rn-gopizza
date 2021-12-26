import { css } from 'styled-components/native'

import theme from '@styles/theme'

export const variantsStatus = {
  Pronto: css`
    background-color: ${theme.COLORS.SUCCESS_900};
    border-color: ${theme.COLORS.SUCCESS_900};
  `,
  Preparando: css`
    background-color: ${theme.COLORS.ALERT_50};
    border-color: ${theme.COLORS.ALERT_900};
    color: ${theme.COLORS.ALERT_900};
  `,
  Entregue: css`
    background-color: ${theme.COLORS.SECONDARY_900};
    border-color: ${theme.COLORS.SECONDARY_900};
  `,
}
