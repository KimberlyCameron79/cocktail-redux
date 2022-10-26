
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return fetch(
      "www.thecocktaildb.com/api/json/v1/1/random.php"
    ).then((res) => res.json());
  }
);

export const fetchSingleCocktail = createAsyncThunk(
  "cocktails/fetchSingleCocktail",
  async ({ id }) => {
    return fetch(
      `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007${id}`
    ).then((res) => res.json());
  }
);

export const fetchSearchCocktail = createAsyncThunk(
  "cocktails/fetchSearchCocktail",
  async ({ searchText }) => {
    return fetch(
      `www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin ${searchText}`
    ).then((res) => res.json());
  }
);

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
      state.cocktails =action.payload;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSingleCocktail.pending]: (state, action) => {
      state.loading = true;
      state.cocktail = action.payload;
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSearchCocktail.pending]: (state, action) => {
      state.loading = true;
      state.searchCocktail = action.payload;
    },
    [fetchSearchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default cocktailSlice.reducer;