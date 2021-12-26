import { TextInputProps } from 'react-native'

export type TypeProps = 'primary' | 'secondary'

export type InputProps = TextInputProps & {
  size?: 'small' | 'medium' | 'large' | 'multiline'
  outline?: boolean
  type?: TypeProps
}
