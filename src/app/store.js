import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from '../features/MovieSlice'
import LoginReducer from '../features/LoginSlice'

const store=configureStore({
    reducer:{
        movies:MoviesReducer,
        login:LoginReducer
    }
})

export default store