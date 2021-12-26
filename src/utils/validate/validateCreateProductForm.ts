import { Alert } from 'react-native'

type CreateProductFormDTO = {
  image: string
  name: string
  description: string
  priceSizeP: string
  priceSizeM: string
  priceSizeG: string
}
export const validateCreateProductForm = ({
  image,
  name,
  description,
  priceSizeP,
  priceSizeM,
  priceSizeG,
}: CreateProductFormDTO) => {
  if (!name.trim()) {
    return Alert.alert('Cadastro', 'Informe o nome da pizza.')
  }
  if (!description.trim()) {
    return Alert.alert('Cadastro', 'Informe a descrição da pizza.')
  }
  if (!image) {
    return Alert.alert('Cadastro', 'Selecione a imagem da pizza.')
  }
  if (!priceSizeP.trim() || !priceSizeM.trim() || !priceSizeG.trim()) {
    return Alert.alert('Cadastro', 'Informe todos os preços da pizza.')
  }
  return true
}
