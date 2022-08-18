import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from '../features/MovieSlice'

const store=configureStore({
    reducer:{
        movies:MoviesReducer
    }
})

export default store