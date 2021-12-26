import { TextInputProps } from 'react-native'

export type SearchInputProps = TextInputProps & {
  onSearch: () => void
  onClear: () => void
}
