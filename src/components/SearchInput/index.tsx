import { useTheme } from 'styled-components/native'

import { Container, InputArea } from './styles'
import ButtonIcon from '../ButtonIcon'
import Input from '../Input'
import { SearchInputProps } from './types'

export default function SearchInput(props: SearchInputProps) {
  const { onClear, onSearch, ...rest } = props
  const { COLORS } = useTheme()

  return (
    <Container>
      <InputArea>
        <Input
          placeholder="Pesquisar..."
          size="medium"
          outline={false}
          style={{ marginBottom: 0 }}
          {...rest}
        />
        <ButtonIcon
          size="small"
          icon="close"
          iconColor={COLORS.BLACK}
          onPress={onClear}
        />
      </InputArea>

      <ButtonIcon size="large" icon="search" color="success" onPress={onSearch} />
    </Container>
  )
}
