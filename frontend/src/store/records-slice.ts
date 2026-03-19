import {createSlice} from "@reduxjs/toolkit"

const recordsSlice = createSlice({

    name: "records",
    initialState: {
        items: "",
        searchTerm: "",
        nextId: ""
    },

    reducers: {}
})

export default recordsSlice.reducer;