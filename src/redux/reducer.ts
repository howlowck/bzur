import { combineReducers } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemon'
import pokemon from './slices/pokemon'
import userRole from './slices/userRole'
// Import Reducers Here (do not delete this line)

const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  pokemon,
  userRole,
  // Add Reducers Here (do not delete this line)
})

export type ReduxState = ReturnType<typeof rootReducer>

export default rootReducer
