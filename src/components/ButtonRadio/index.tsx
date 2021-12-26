import { Container, RadioInner, RadioOuter, Title } from './styles'
import { ButtonRadioProps } from './types'

export default function ButtonRadio(props: ButtonRadioProps) {
  const { title, selected, ...rest } = props
  return (
    <Container selected={selected} {...rest}>
      <RadioOuter>{selected && <RadioInner />}</RadioOuter>
      <Title>{title}</Title>
    </Container>
  )
}
