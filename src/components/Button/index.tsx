import { Container, Loader, Title } from './styles'
import { ButtonProps } from './types'

export default function Button(props: ButtonProps) {
  const { title, type = 'primary', loading = false, ...rest } = props
  return (
    <Container
      activeOpacity={0.8}
      type={type}
      style={{ elevation: 3 }}
      disabled={loading}
      {...rest}
    >
      {loading ? <Loader /> : <Title>{title}</Title>}
    </Container>
  )
}
