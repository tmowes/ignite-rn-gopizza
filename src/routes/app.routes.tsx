import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '@pages/Home'
import Product from '@pages/Product'
import Order from '@pages/Order'
import { useAuth } from '@contexts/AuthProvider'

import TabRoutes from './tab.routes'

const { Navigator, Screen, Group } = createNativeStackNavigator()

export default function AppRoutes() {
  const { user } = useAuth()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {user?.isAdmin ? (
        <Group>
          <Screen name="Home" component={Home} />
          <Screen name="Product" component={Product} />
        </Group>
      ) : (
        <Group>
          <Screen name="TabRoutes" component={TabRoutes} />
          <Screen name="Order" component={Order} />
        </Group>
      )}
    </Navigator>
  )
}
