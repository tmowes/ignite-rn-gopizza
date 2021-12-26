import { useEffect, useState } from 'react'
import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'
import firestore from '@react-native-firebase/firestore'

import { useAuth } from '@contexts/AuthProvider'
import Home from '@pages/Home'
import Orders from '@pages/Orders'
import { ORDER_COLLECTION } from '@utils/collectionsConstants'

import BottomMenu from './BottomMenu'

const { Navigator, Screen } = createBottomTabNavigator()
export default function TabRoutes() {
  const { COLORS } = useTheme()
  const { user } = useAuth()
  const [notifications, setNotifications] = useState('0')

  useEffect(() => {
    const subscribe = firestore()
      .collection(ORDER_COLLECTION)
      .where('status', '==', 'Pronto')
      .onSnapshot((query) => {
        setNotifications(String(query.docs.length))
      })

    return () => subscribe()
  }, [])

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.SECONDARY_900,
        tabBarInactiveTintColor: COLORS.SECONDARY_400,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 64,
          borderTopWidth: 0,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <BottomMenu title="Cardápio" color={color} />,
        }}
      />
      <Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title="Pedidos" color={color} notifications={notifications} />
          ),
        }}
      />
    </Navigator>
  )
}
