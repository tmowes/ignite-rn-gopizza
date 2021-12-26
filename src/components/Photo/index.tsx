import { TouchableOpacity } from 'react-native'

import { Container, EmptyPhotoContainer, Image, EmptyPhotoText } from './styles'
import { PhotoProps } from './types'

export default function Photo(props: PhotoProps) {
  const { uri, ...rest } = props
  return (
    <TouchableOpacity activeOpacity={0.8} {...rest}>
      <Container>
        {uri ? (
          <Image source={{ uri }} />
        ) : (
          <EmptyPhotoContainer>
            <EmptyPhotoText>nenhuma foto selecionada</EmptyPhotoText>
          </EmptyPhotoContainer>
        )}
      </Container>
    </TouchableOpacity>
  )
}
