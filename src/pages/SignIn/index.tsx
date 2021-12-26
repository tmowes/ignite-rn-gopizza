import { useState } from 'react'
import { Alert, KeyboardAvoidingView } from 'react-native'

import auth from '@react-native-firebase/auth'

import brandImg from '@assets/brand.png'
import { useAuth } from '@contexts/AuthProvider'

import Button from '../../components/Button'
import ButtonText from '../../components/ButtonText'
import Input from '../../components/Input'
import { Container, Title, Scroll, Brand } from './styles'

export default function SignIn() {
  const { isLoading, signIn, forgotPassword } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    await signIn({ email, password })
  }

  const handleForgotPassword = async () => {
    await forgotPassword({ email })
  }

  return (
    <Container>
      <KeyboardAvoidingView behavior="height">
        <Scroll>
          <Brand source={brandImg} />
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            type="secondary"
            value={email}
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <ButtonText
            title="Recuperar senha"
            style={{ marginLeft: 'auto' }}
            disabled={isLoading}
            onPress={handleForgotPassword}
          />

          <Button
            title="Entrar"
            type="secondary"
            loading={isLoading}
            onPress={handleSignIn}
          />
        </Scroll>
      </KeyboardAvoidingView>
    </Container>
  )
}
