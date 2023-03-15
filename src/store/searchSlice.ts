import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Pokemon } from "@/app/types";

export interface SearchState {
  search: string;
  startupPokemon: Pokemon[];
}

const initialState: SearchState = {
  search: "",
  startupPokemon: [],
};

const seatchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setStartupPokemon(state, action: PayloadAction<Pokemon[]>) {
      state.startupPokemon = action.payload;
    },
  },
});

export const { setSearch, setStartupPokemon } = seatchSlice.actions;
export default seatchSlice.reducer;
