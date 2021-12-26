export type ProductDataProps = {
  id: string
  name: string
  name_insensitive: string
  description: string
  prices_sizes: PriceDataProps
  photo_url: string
  photo_path: string
}

export type PriceDataProps = {
  p: string
  m: string
  g: string
}

export type ProductResponseProps = Omit<ProductDataProps, 'id'>

export type OrderSizes = {
  [key: string]: number
}

export type OrderResponseProps = ProductResponseProps & {
  prices_sizes: OrderSizes
}

export type OrderDataProps = {
  id: string
  photo_url: string
  pizza_name: string
  status: 'Pronto' | 'Preparando' | 'Entregue'
  description: string
  amount: string
  size: string
  table_number: string
  waiter_id: string
  quantity: number
}
