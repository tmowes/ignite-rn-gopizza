import { Container, Size, Label, InputContainer } from './styles'
import { InputPriceProps } from './types'

export default function InputPrice(props: InputPriceProps) {
  const { size = 'P', type = 'primary', ...rest } = props
  return (
    <Container>
      <Size>
        <Label>{size}</Label>
      </Size>
      <Label>R$</Label>
      <InputContainer keyboardType="numeric" type={type} {...rest} />
    </Container>
  )
}
