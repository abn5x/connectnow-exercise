import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        name: "",
        rating: "",
        ascend: true,
        order: "Release Date"
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload.name
        },
        setRating(state, action) {
            state.rating = action.payload.rating
        },
        clearFilters(state, action) {
            state.name = ""
            state.rating = ""
        },
        toggleAscend(state, action) {
            state.ascend = !state.ascend
        },
        setOrder(state, action) {
            state.order = action.payload.order
        }
    }
})

export const { setName, setRating, clearFilters, toggleAscend, setOrder } = filterSlice.actions
export default filterSlice.reducer