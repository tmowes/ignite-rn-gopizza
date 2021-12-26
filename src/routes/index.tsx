import { useAuth } from '@contexts/AuthProvider'

import SignIn from '../pages/SignIn'
import AppRoutes from './app.routes'

export type UserProps = {
  uid: string
}

export default function Routes() {
  const { user } = useAuth()

  if (user) {
    return <AppRoutes />
  } else {
    return <SignIn />
  }
}
