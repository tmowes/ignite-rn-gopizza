import { TouchableOpacityProps } from 'react-native'

export type ButtonRadioProps = TouchableOpacityProps & {
  title: string
  selected: boolean
}

export type ContainerProps = TouchableOpacityProps & {
  selected: boolean
}
