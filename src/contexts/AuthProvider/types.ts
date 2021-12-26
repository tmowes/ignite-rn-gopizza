import { ReactNode } from 'react'

export type AuthContextData = {
  isLoading: boolean
  signIn: ({ email, password }: SignInDTO) => Promise<void>
  signOut: () => Promise<void>
  forgotPassword: ({ email }: ForgotPasswordDTO) => Promise<void>
  user: UserProps | null
}

export type AuthProviderProps = {
  children: ReactNode
}

export type SignInDTO = {
  email: string
  password: string
}

export type ForgotPasswordDTO = {
  email: string
}

export type UserProps = {
  id: string
  name: string
  isAdmin: boolean
}
