import { Container, Label, Title } from './styles'
import { ListHeaderProps } from './types'

export default function ListHeader(props: ListHeaderProps) {
  const { title, label } = props

  return (
    <Container>
      <Title>{title}</Title>
      <Label>{label}</Label>
    </Container>
  )
}
