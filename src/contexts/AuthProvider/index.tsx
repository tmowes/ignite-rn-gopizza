import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Alert } from 'react-native'

import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  AuthContextData,
  AuthProviderProps,
  ForgotPasswordDTO,
  SignInDTO,
  UserProps,
} from './types'

export const userStorageKey = '@gopizza:users'

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<UserProps | null>(null)

  const signIn = async ({ email, password }: SignInDTO) => {
    if (!email || !password) {
      return Alert.alert('Login', 'Informe o e-mail e a senha')
    }

    setIsLoading(true)

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((account) => {
        firestore()
          .collection('users')
          .doc(account.user.uid)
          .get()
          .then(async (profile) => {
            if (profile.exists) {
              const { name, isAdmin } = profile.data() as UserProps
              const userData = {
                id: profile.id,
                name,
                isAdmin,
              }
              await AsyncStorage.setItem(userStorageKey, JSON.stringify(userData))
              setUser(userData)
            }
          })
          .catch(() =>
            Alert.alert(
              'Login',
              'Não foi possivel buscar os dados de perfil do usuario.',
            ),
          )
      })
      .catch(({ code }) => {
        console.log(code)
        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          return Alert.alert('Login', 'E-mail ou senha inválidos, tente novamente')
        }

        Alert.alert('Login', 'Houve algum erro desconhecido., tente novamente')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const signOut = async () => {
    await auth().signOut()
    await AsyncStorage.removeItem(userStorageKey)
    setUser(null)
  }

  const forgotPassword = async ({ email }: ForgotPasswordDTO) => {
    if (!email) {
      return Alert.alert('Recuperar senha', 'Informe o e-mail.')
    }

    setIsLoading(true)
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          'Recuperar senha',
          'Enviamos um link no seu e-mail para redefinir sua senha',
        )
      })
      .catch(({ code }) => {
        console.log(code)
        if (code === 'auth/invalid-email') {
          return Alert.alert('Recuperar senha', 'Precisa ser um e-mail válido')
        }
        if (code === 'auth/user-not-found') {
          return Alert.alert('Recuperar senha', 'E-mail não encontrado, use outro e-mail')
        }
        Alert.alert(
          'Recuperar senha',
          'Houve algum erro desconhecido na solicitação, tente novamente',
        )
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const loadUserStorageData = async () => {
    setIsLoading(true)

    const storedUser = await AsyncStorage.getItem(userStorageKey)
    if (storedUser) {
      const userData = JSON.parse(storedUser) as UserProps
      console.log({ userData })
      setUser(userData)
    }

    setIsLoading(false)
  }

  useEffect(() => {
    loadUserStorageData()
  }, [])

  const providerValues = useMemo(
    () => ({
      isLoading,
      signIn,
      signOut,
      forgotPassword,
      user,
    }),
    [isLoading, user],
  )

  return <AuthContext.Provider value={providerValues}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
