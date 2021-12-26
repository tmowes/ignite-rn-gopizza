import { Container, Notifications, Quantity, Title } from './styles'
import { BottomMenuProps } from './types'

export default function BottomMenu(props: BottomMenuProps) {
  const { title, color, notifications } = props
  const hasNotifications = notifications !== '0'
  return (
    <Container>
      <Title color={color}>{title}</Title>
      {notifications && (
        <Notifications hasNotifications={hasNotifications}>
          <Quantity hasNotifications={hasNotifications}>{notifications}</Quantity>
        </Notifications>
      )}
    </Container>
  )
}
