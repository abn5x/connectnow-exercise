import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk(
    'data/getData',
    async () => {
        const response = await axios.get('https://public.connectnow.org.uk/applicant-test/')
        return response.data;
    }
)

export const extraReducers = {
    [getData.pending]: (state, action) => {
        state.loading = true
        state.error = {}
    },
    [getData.fulfilled]: (state, action) => {
        state.data = action.payload
        state.loading = false
        state.error = {}
    },
    [getData.rejected]: (state, action) => {
        state.loading = false
        state.error = action.error.message
    }
}