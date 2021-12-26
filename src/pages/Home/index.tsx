import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'

import firestore from '@react-native-firebase/firestore'
import { ProductDataProps } from '@src/types'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import Button from '@components/Button'
import ButtonIcon from '@components/ButtonIcon'
import ListHeader from '@components/ListHeader'
import ProductCard from '@components/ProductCard'
import SearchInput from '@components/SearchInput'
import { useAuth } from '@contexts/AuthProvider'
import { PIZZA_COLLECTION } from '@utils/collectionsConstants'

import { ActionContainer, Container, Header, Title } from './styles'

export default function Home() {
  const { signOut, user } = useAuth()
  const { navigate } = useNavigation()
  const [pizzas, setPizzas] = useState<ProductDataProps[]>([])
  const [search, setSearch] = useState('')

  const loadPizzas = (value: string) => {
    const formattedValue = value.toLowerCase().trim()
    firestore()
      .collection(PIZZA_COLLECTION)
      .orderBy('name_insensitive')
      .startAt(formattedValue)
      .endAt(`${formattedValue}\uf8ff`)
      .get()
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProductDataProps[]
        setPizzas(data)
      })
      .catch((err) => {
        console.error(err)
        Alert.alert('Consulta', 'Não foi possivel buscar as pizzas.')
      })
  }

  const onSearch = () => {
    loadPizzas(search)
  }

  const onSearchClear = () => {
    loadPizzas('')
    setSearch('')
  }

  const selectProduct = (id: string) => {
    const route = user?.isAdmin ? 'Product' : 'Order'
    navigate(route, { id })
  }

  useFocusEffect(
    useCallback(() => {
      loadPizzas('')
    }, []),
  )

  return (
    <Container>
      <Header>
        <Title>😊 Olá, {user?.isAdmin ? 'Admin' : 'Garçon'}</Title>
        <ButtonIcon type="solid" icon="logout" onPress={signOut} />
      </Header>

      <SearchInput
        value={search}
        onChangeText={setSearch}
        onSearch={onSearch}
        onClear={onSearchClear}
      />

      <ListHeader title="Cardápio" label={`${pizzas.length} pizzas`} />

      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard data={item} onPress={() => selectProduct(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 124,
          marginHorizontal: 24,
        }}
      />
      {user?.isAdmin && (
        <ActionContainer>
          <Button
            title="Cadastrar pizza"
            type="secondary"
            onPress={() => navigate('Product', { id: undefined })}
          />
        </ActionContainer>
      )}
    </Container>
  )
}
