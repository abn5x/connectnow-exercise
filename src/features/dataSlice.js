import { createSlice } from "@reduxjs/toolkit"
import { extraReducers } from "../features/asyncData"

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        error: {},
        data: [],
        filteredData: []
    },
    reducers: {
        setOrderBy: (state, action) => {
            state.filteredData.sort(state.orderBy[action.payload.method])
        },
        setFilteredData: (state, action) => {
            state.filteredData = [...action.payload.data]
        },
        filterFilter: (state, action) => {
        }
    },
    extraReducers: {
        ...extraReducers
    }
})
export const { setOrderBy, setFilteredData, filterFilter } = dataSlice.actions
export default dataSlice.reducer