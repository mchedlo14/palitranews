import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: null,
    authors: null,
    comments: null
}

const dataSlice = createSlice({
    name: "DataSlice",
    initialState,
    reducers: {
        SetPosts(state, payload) {
            state.posts = payload.payload
        },
        setAuthors(state, payload) {
            state.authors = payload.payload
        },
        setComments(state, payload) {
            state.comments = payload.payload
        }
    }
});

export default dataSlice;

export const dataActions = dataSlice.actions;