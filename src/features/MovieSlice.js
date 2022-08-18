import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../common/apis/MovieApis";
import { Apikey } from "../common/apis/MovieApiKey";

const initialState = {
  loading: false,
  movies: {},
  error: "",
  shows:{},
  details:{}
};

export const movieApi = createAsyncThunk("movies/movieList", (term) => {
  console.log(term)
  return axiosApi
    .get(`?apiKey=${Apikey}&s=${term}&type=movie`)
    .then((res) => res.data);
});
export const showsApi = createAsyncThunk("movies/showsList", (term) => {
  console.log(term)
  return axiosApi
    .get(`?apiKey=${Apikey}&s=${term}&type=series`)
    .then((res) => res.data);
});
export const movieOrShowDetail = createAsyncThunk("movies/movieOrShowDetail", (id) => {
  console.log(id)
  return axiosApi
    .get(`?apiKey=${Apikey}&i=${id}&Plot=full`)
    .then((res) => res.data);
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, action) => {
    //   state.movies = action.payload;
    // },
    clearImdbData:(state,action)=>{
      state.details={}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(movieApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(movieApi.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload;
      state.error = "";
    });
    builder.addCase(movieApi.rejected, (state, action) => {
      state.loading = false;
      state.movies = {};
      state.error = action.payload.error.message;
    });
    builder.addCase(showsApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(showsApi.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = action.payload;
      state.error = "";
    });
    builder.addCase(showsApi.rejected, (state, action) => {
      state.loading = false;
      state.shows = {};
      state.error = action.payload.error.message;
    });
    builder.addCase(movieOrShowDetail.pending, (state, action) => {
      state.loading = true;
      state.details = {};
      state.error = "";
    });
    builder.addCase(movieOrShowDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload;
      state.error = "";
    });
    builder.addCase(movieOrShowDetail.rejected, (state, action) => {
      state.loading = false;
      state.details = {};
      state.error = action.payload.error.message;
    });
  },
});

export default movieSlice.reducer;
export const { addMovies,clearImdbData } = movieSlice.actions;
