import { useMemo } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import personalitiesReducer from './slices/personalities/personalities.slice'

let store

const reducer = {
  personalities: personalitiesReducer
}

function initStore() {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const initializeStore = () => {
  let _store = store ?? initStore()

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (store) {
    _store = initStore()
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
