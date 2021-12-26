import { Alert } from 'react-native'

type CreateProductFormDTO = {
  selectedSize: string
  tableNumber: string
  quantity: number
}
export const validateCreateOrderForm = ({
  selectedSize,
  tableNumber,
  quantity,
}: CreateProductFormDTO) => {
  if (!selectedSize.trim()) {
    return Alert.alert('Pedido', 'Selecione o tamanho da pizza.')
  }
  if (!tableNumber.trim()) {
    return Alert.alert('Pedido', 'Informe o numero da mesa.')
  }
  if (!quantity) {
    return Alert.alert('Pedido', 'A Informe a quantidade.')
  }
  if (quantity <= 0) {
    return Alert.alert('Pedido', 'A quantidade precisa ser maior que 0.')
  }

  return true
}
