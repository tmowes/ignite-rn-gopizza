import { TouchableOpacityProps } from 'react-native'

export type TypeProps = 'primary' | 'secondary'

export type ButtonProps = TouchableOpacityProps & {
  title: string
  loading?: boolean
  type?: TypeProps
}

export type ContainerProps = TouchableOpacityProps & {
  type?: TypeProps
}
