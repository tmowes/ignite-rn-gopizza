import { ProductDataProps } from '@src/types'
import { RectButtonProps } from 'react-native-gesture-handler'

export type ProductCardProps = RectButtonProps & {
  data: ProductDataProps
}
