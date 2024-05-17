import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { MenusApi } from './menusApi'

export const store = configureStore({
    reducer: {
        [MenusApi.reducerPath]: MenusApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(MenusApi.middleware),
})
setupListeners(store.dispatch)