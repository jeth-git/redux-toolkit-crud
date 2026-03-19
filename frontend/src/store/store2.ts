import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/counter-slice"
import {apiSlice} from "../dogs/dogs-api-slice"

export const store2 = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    }, 
    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(apiSlice.middleware)
    } 
})

export type appDispatch = typeof store2.dispatch;
export type RootState = ReturnType<typeof store2.getState>