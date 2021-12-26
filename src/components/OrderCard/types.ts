import { TouchableOpacityProps } from 'react-native'

import { OrderDataProps } from '@src/types'

export type OrderCardProps = TouchableOpacityProps & {
  index: number
  data: OrderDataProps
}

export type StatusTypesProps = 'Pronto' | 'Preparando' | 'Entregue'

export type ContainerProps = TouchableOpacityProps & {
  index: number
}
