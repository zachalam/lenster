import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  staffMode: boolean
  setStaffMode: (staffMode: boolean) => void
}

export const useAppStore = create(
  persist<AppState>(
    (set, _get) => ({
      staffMode: false,
      setStaffMode: (staffMode: boolean) => set(() => ({ staffMode }))
    }),
    {
      name: 'app-storage'
    }
  )
)

export default useAppStore
