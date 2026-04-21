import { combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducer from '@/src/features/user/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import nutritionReducer from '@/src/features/nutrition/nutritionSlice'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist'

const rootReducer = combineReducers({
  user: userReducer,
  nutrition: nutritionReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['user', 'nutrition'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== 'production',
  })

  export const persistor = persistStore(store)
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
