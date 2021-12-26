import { useEffect, useMemo, useState } from 'react'
import { Alert } from 'react-native'

import firestore from '@react-native-firebase/firestore'
import { OrderResponseProps } from '@src/types'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

import { OrderNavProps } from '@routes/types'
import Button from '@components/Button'
import ButtonIcon from '@components/ButtonIcon'
import ListHeader from '@components/ListHeader'
import ProductCard from '@components/ProductCard'
import SearchInput from '@components/SearchInput'
import { useAuth, userStorageKey } from '@contexts/AuthProvider'
import { ORDER_COLLECTION, PIZZA_COLLECTION } from '@utils/collectionsConstants'
import ButtonRadio from '@components/ButtonRadio'
import { pizzaSizes } from '@utils/pizzaSizes'
import Input from '@components/Input'
import { validateCreateOrderForm } from '@utils/validate/validateCreateOrderForm'

import {
  ActionContainer,
  Container,
  Form,
  Header,
  ProductPhoto,
  FormRow,
  Title,
  InputGroup,
  Label,
  Price,
  Scroll,
} from './styles'

export default function Order() {
  const { user } = useAuth()
  const { goBack, navigate } = useNavigation()
  const { params } = useRoute()
  const { id } = params as OrderNavProps
  const [selectedSize, setSelectedSize] = useState('')
  const [tableNumber, setTableNumber] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [pizza, setPizza] = useState<OrderResponseProps>({} as OrderResponseProps)
  const [isLoading, setIsLoading] = useState(false)

  const amount = useMemo(
    () =>
      selectedSize
        ? (pizza.prices_sizes[selectedSize] * quantity).toFixed(2).replace('.', ',')
        : '0,00',
    [pizza.prices_sizes, quantity, selectedSize],
  )

  const createOrder = async () => {
    const formValid = validateCreateOrderForm({ selectedSize, quantity, tableNumber })
    if (formValid) {
      setIsLoading(true)
      firestore()
        .collection(ORDER_COLLECTION)
        .add({
          quantity,
          amount,
          pizza_name: pizza.name,
          size: selectedSize,
          table_number: tableNumber,
          status: 'Preparando',
          waiter_id: user?.id,
          photo_url: pizza.photo_url,
        })
        .then(() => {
          // Alert.alert('Pedido', 'Pizza solicitada com sucesso.')
          navigate('Home')
        })
        .catch((err) => {
          console.error(err)
          Alert.alert('Pedido', 'Não foi possivel solicitar a pizza.')
          setIsLoading(false)
        })
    }
  }
  useEffect(() => {
    if (id) {
      firestore()
        .collection(PIZZA_COLLECTION)
        .doc(id)
        .get()
        .then((res) => {
          const data = res.data() as OrderResponseProps
          setPizza(data)
        })
        .catch((err) => {
          console.error(err)
          Alert.alert('Pedido', 'Não foi possivel carregar a pizza.')
        })
    }
  }, [id])

  console.log(amount)

  return (
    <Container>
      <Scroll>
        <Header>
          <ButtonIcon type="outline" icon="chevron-left" onPress={goBack} />
        </Header>

        <ProductPhoto source={{ uri: pizza.photo_url }} />
        <Form>
          <Title>{pizza.name}</Title>
          <Label>Selecione um tamanho</Label>
          <FormRow>
            {pizzaSizes.map((radio) => (
              <ButtonRadio
                key={radio.id}
                title={radio.title}
                selected={selectedSize === radio.id}
                onPress={() => setSelectedSize(radio.id)}
              />
            ))}
          </FormRow>
          <FormRow>
            <InputGroup>
              <Label>Número da mesa</Label>
              <Input
                keyboardType="numeric"
                value={tableNumber}
                onChangeText={setTableNumber}
              />
            </InputGroup>
            <InputGroup>
              <Label>Quantidade</Label>
              <Input
                keyboardType="numeric"
                value={String(quantity)}
                onChangeText={(val) => setQuantity(Number(val))}
              />
            </InputGroup>
          </FormRow>
          <Price>Total: R$ {amount}</Price>
        </Form>
        <ActionContainer>
          <Button
            title="Confirmar pedido"
            type="primary"
            loading={isLoading}
            onPress={createOrder}
          />
        </ActionContainer>
      </Scroll>
    </Container>
  )
}
