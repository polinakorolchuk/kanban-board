import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // используем localStorage

import boardReducer from './reducers/BoardSlice'

// Комбинируем редьюсеры (если появятся новые — добавляй сюда)
const rootReducer = combineReducers({
  board: boardReducer
})

// Конфигурация persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['board'] // сохраняем только board
}

// Оборачиваем rootReducer в persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Создаём store с middleware для redux-persist
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false // отключаем проверку сериализуемости для redux-persist
    })
})

// Создаём persistor
export const persistor = persistStore(store)

// Типы
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
