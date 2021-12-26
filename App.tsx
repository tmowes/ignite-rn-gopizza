import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import AppSrc from './src'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppSrc />
    </GestureHandlerRootView>
  )
}
