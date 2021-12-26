import { TextInputProps } from 'react-native'

export type TypeProps = 'primary' | 'secondary'

export type InputPriceProps = TextInputProps & {
  size?: 'P' | 'M' | 'G'
  type?: TypeProps
}
