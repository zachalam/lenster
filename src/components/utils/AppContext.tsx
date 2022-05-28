import { ApolloError } from '@apollo/client'
import { Profile } from '@generated/types'
import { createContext, Dispatch } from 'react'

export interface ContextType {
  selectedProfile: number
  setSelectedProfile: Dispatch<number>
  profiles: Profile[]
  currentUser: Profile | undefined
  currentUserError?: ApolloError
}

const AppContext = createContext<ContextType>({
  selectedProfile: 0,
  setSelectedProfile: () => {},
  profiles: [],
  currentUser: undefined,
  currentUserError: undefined
})

export default AppContext
