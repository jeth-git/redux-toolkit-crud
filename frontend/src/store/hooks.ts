
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

import type {RootState, appDispatch} from "./store2"

export const useAppDispatch = () => useDispatch<appDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
