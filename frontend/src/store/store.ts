import {configureStore} from "@reduxjs/toolkit";

import recordsSlice from "./records-slice"

export const store = configureStore({
    reducer: {
        records: recordsSlice,
    }
})