import { useTheme } from 'styled-components'

import ButtonIcon from '../ButtonIcon'
import {
  Container,
  Content,
  Description,
  Details,
  Info,
  Line,
  Name,
  ProductPhoto,
} from './styles'
import { ProductCardProps } from './types'

export default function ProductCard(props: ProductCardProps) {
  const { data, ...rest } = props
  const { name, description, photo_url } = data
  const { COLORS } = useTheme()
  return (
    <Container>
      <Content {...rest}>
        <ProductPhoto source={{ uri: photo_url }} />
        <Details>
          <Info>
            <Name>{name}</Name>
            <ButtonIcon icon="chevron-right" iconColor={COLORS.SHAPE} />
          </Info>
          <Description>{description}</Description>
        </Details>
      </Content>
      <Line />
    </Container>
  )
}
