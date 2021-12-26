import { Container, Description, Name, ProductPhoto, Status, StatusText } from './styles'
import { OrderCardProps } from './types'

export default function OrderCard(props: OrderCardProps) {
  const { index, data, ...rest } = props
  const { pizza_name, photo_url, table_number, status, quantity } = data
  return (
    <Container index={index} {...rest}>
      <ProductPhoto source={{ uri: photo_url }} />

      <Name>{pizza_name}</Name>
      <Description>
        Mesa {table_number} • Qnt: {quantity}
      </Description>

      <Status status={status}>
        <StatusText status={status}>{status}</StatusText>
      </Status>
    </Container>
  )
}
