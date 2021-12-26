import { Container, Title } from './styles'
import { ButtonTextProps } from './types'

export default function ButtonText(props: ButtonTextProps) {
  const { title, ...rest } = props
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
