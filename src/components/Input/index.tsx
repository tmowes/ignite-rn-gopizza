import { InputContainer } from './styles'
import { InputProps } from './types'

export default function Input(props: InputProps) {
  const { size = 'large', type = 'primary', outline = true, ...rest } = props
  return (
    <InputContainer
      size={size}
      type={type}
      outline={outline}
      style={{ textAlignVertical: size === 'multiline' ? 'top' : 'center' }}
      {...rest}
    />
  )
}
