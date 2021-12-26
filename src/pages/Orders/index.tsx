import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

import { FlatList } from 'react-native-gesture-handler'
import firestore from '@react-native-firebase/firestore'
import { OrderDataProps } from '@src/types'

import OrderCard from '@components/OrderCard'
import Separator from '@components/Separator'
import { ORDER_COLLECTION } from '@utils/collectionsConstants'
import { useAuth } from '@contexts/AuthProvider'

import { Container, Header, Title } from './styles'

export default function Orders() {
  const { user } = useAuth()
  const [orders, setOrders] = useState<OrderDataProps[]>([])

  const updateDelivery = (id: string) => {
    Alert.alert('Entrega', 'Confirma que a pizza foi entregue?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () =>
          firestore().collection(ORDER_COLLECTION).doc(id).update({ status: 'Entregue' }),
      },
    ])
  }

  useEffect(() => {
    const subscribe = firestore()
      .collection(ORDER_COLLECTION)
      .where('waiter_id', '==', user?.id)
      .onSnapshot((query) => {
        const data = query.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as OrderDataProps[]
        setOrders(data)
      })

    return () => subscribe()
  }, [user?.id])

  return (
    <Container>
      <Header>
        <Title>Pedidos feitos</Title>
      </Header>
      <FlatList
        data={orders}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 124 }}
        renderItem={({ item, index }) => (
          <OrderCard
            index={index}
            data={item}
            disabled={item.status === 'Entregue'}
            onPress={() => updateDelivery(item.id)}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  )
}
