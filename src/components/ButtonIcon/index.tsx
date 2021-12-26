import { MaterialIcons } from '@expo/vector-icons'

import { Container } from './styles'
import theme from '../../styles/theme'
import { ButtonIconProps } from './types'

export default function ButtonIcon(props: ButtonIconProps) {
  const {
    color = 'default',
    size = 'small',
    type = 'solid',
    iconColor = theme.COLORS.WHITE,
    icon,
    ...rest
  } = props
  return (
    <Container activeOpacity={0.8} color={color} size={size} type={type} {...rest}>
      <MaterialIcons name={icon} size={size === 'small' ? 24 : 32} color={iconColor} />
    </Container>
  )
}
