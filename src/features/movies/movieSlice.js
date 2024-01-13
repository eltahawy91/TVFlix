import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { ApiKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await MovieApi.get(
      `?apiKey=${ApiKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await MovieApi.get(
      `?apiKey=${ApiKey}&s=${term}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMovieShow = createAsyncThunk(
  "movies/fetchAsyncMovieShow",
  async (id) => {
    const response = await MovieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);
    return response.data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  selectedFilm: {},
};
export const movieSlice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload;
    },
    getAllMovies: (state) => {
      return state.movies.movies;
    },
    getAllShows: (state) => {
      return { ...state.movies.shows };
    },
    getSelectMovie: (state) => {
      return { ...state.movies.shows };
    },
    removeSelectedMoviesOrShow: (state) => {
      state.selectedFilm = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      return { ...state, data: action.payload };
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      return { ...state, shows: action.payload };
    });
    builder.addCase(fetchAsyncMovieShow.fulfilled, (state, { payload }) => {
      return { ...state, selectedFilm: payload };
    });
    builder.addCase(fetchAsyncMovies.pending, () => {
      console.log("pending");
    });
    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("rejected");
    });
  },
});
// export const getAllMovies = (state) => state.movies.movies;

export default movieSlice.reducer;
export const {
  addMovie,
  getAllMovies,
  getAllShows,
  getSelectMovie,
  removeSelectedMoviesOrShow,
} = movieSlice.actions;
