import { useEffect, useState } from 'react'
import { Alert, Platform, View } from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ProductResponseProps } from '@src/types'

import ButtonText from '@components/ButtonText'
import ButtonIcon from '@components/ButtonIcon'
import Photo from '@components/Photo'
import Button from '@components/Button'
import InputPrice from '@components/InputPrice'
import Input from '@components/Input'
import { validateCreateProductForm } from '@utils/validate/validateCreateProductForm'
import { PIZZA_COLLECTION } from '@utils/collectionsConstants'
import { ProductNavProps } from '@routes/types'

import {
  Container,
  UploadSection,
  Header,
  Title,
  Form,
  Label,
  InputGroupHeader,
  InputGroup,
  MaxCharacters,
  Scroll,
} from './styles'

export default function Product() {
  const { goBack, navigate } = useNavigation()
  const { params } = useRoute()

  const [image, setImage] = useState('')
  const [photoPath, setPhotoPath] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priceSizeP, setPriceSizeP] = useState('')
  const [priceSizeM, setPriceSizeM] = useState('')
  const [priceSizeG, setPriceSizeG] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { id } = params as ProductNavProps

  console.log({ id })

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
        quality: 1,
      })

      if (!result.cancelled) {
        setImage(result.uri)
      }
    }
  }

  const createProduct = async () => {
    const formValid = validateCreateProductForm({
      name,
      description,
      image,
      priceSizeG,
      priceSizeM,
      priceSizeP,
    })

    if (formValid) {
      setIsLoading(true)
      const fileName = new Date().getTime()
      const reference = storage().ref(`/${PIZZA_COLLECTION}/${fileName}.png`)

      await reference.putFile(image)
      const photo_url = await reference.getDownloadURL()

      firestore()
        .collection(PIZZA_COLLECTION)
        .add({
          name: name.trim(),
          name_insensitive: name.toLowerCase().trim(),
          description: description.trim(),
          prices_sizes: {
            p: priceSizeP,
            m: priceSizeM,
            g: priceSizeG,
          },
          photo_url,
          photo_path: reference.fullPath,
        })
        .then(() => Alert.alert('Cadastro', 'Pizza cadastrada com sucesso.'))
        .catch((err) => {
          console.error(err)
          Alert.alert('Cadastro', 'Não foi possivel cadastrar a pizza.')
        })
        .finally(() => {
          setIsLoading(false)
          setImage('')
          setName('')
          setDescription('')
          // setPriceSizeP('')
          // setPriceSizeM('')
          // setPriceSizeG('')
        })
    }
  }

  const deleteProduct = async () => {
    firestore()
      .collection(PIZZA_COLLECTION)
      .doc(id)
      .delete()
      .then(() => {
        storage()
          .ref(photoPath)
          .delete()
          .then(() => navigate('Home'))
      })
  }

  useEffect(() => {
    if (id) {
      firestore()
        .collection(PIZZA_COLLECTION)
        .doc(id)
        .get()
        .then((res) => {
          const data = res.data() as ProductResponseProps
          setName(data.name)
          setDescription(data.description)
          setImage(data.photo_url)
          setPhotoPath(data.photo_path)
          setPriceSizeP(data.prices_sizes.p)
          setPriceSizeM(data.prices_sizes.m)
          setPriceSizeG(data.prices_sizes.g)
        })
    }
  }, [id])

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Scroll>
        <Header>
          <ButtonIcon type="outline" icon="chevron-left" onPress={goBack} />
          <Title>Cadastrar</Title>
          {id ? (
            <ButtonText title="Deletar" onPress={deleteProduct} />
          ) : (
            <View style={{ width: 56 }} />
          )}
        </Header>
        <UploadSection>
          <Photo uri={image} />
          {!id && (
            <Button
              title="Carregar"
              type="secondary"
              onPress={() => handlePickImage()}
              style={{ width: '25%', margin: 0, marginLeft: 24 }}
            />
          )}
        </UploadSection>
        <Form>
          <InputGroup>
            <Label>Nome</Label>
            <Input value={name} onChangeText={setName} />
          </InputGroup>

          <InputGroup>
            <InputGroupHeader>
              <Label>Descrição</Label>
              <MaxCharacters>Max 90 caracteres</MaxCharacters>
            </InputGroupHeader>
            <Input
              multiline
              maxLength={90}
              size="multiline"
              value={description}
              onChangeText={setDescription}
            />
          </InputGroup>
          <InputGroup>
            <Label>Tamanhos e preços</Label>
            <InputPrice size="P" value={priceSizeP} onChangeText={setPriceSizeP} />
            <InputPrice size="M" value={priceSizeM} onChangeText={setPriceSizeM} />
            <InputPrice size="G" value={priceSizeG} onChangeText={setPriceSizeG} />
          </InputGroup>
          {!id && (
            <Button onPress={createProduct} loading={isLoading} title="Cadastrar pizza" />
          )}
        </Form>
      </Scroll>
    </Container>
  )
}
