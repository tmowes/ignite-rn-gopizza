import { RouteProp } from '@react-navigation/native'

export type ProductNavProps = {
  id?: string
}

export type OrderNavProps = {
  id: string
}

export type ProductScreenRouteProp = RouteProp<AppStackParamList, 'Product'>

export type OrderScreenRouteProp = RouteProp<AppStackParamList, 'Order'>

type AppStackParamList = {
  Home: undefined
  Product: ProductNavProps
  Order: OrderNavProps
  Orders: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
