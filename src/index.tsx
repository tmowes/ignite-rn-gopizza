import { StatusBar } from 'react-native'

import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components/native'
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'

import { AppProvider } from '@contexts/AppProvider'

import Routes from './routes'
import theme from './styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay_400Regular,
    DMSans_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AppProvider>
    </ThemeProvider>
  )
}
