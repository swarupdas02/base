import { createSlice } from "@reduxjs/toolkit";

interface StateObject {
  origin: boolean;
  darkMode: boolean;
}

const initialState: StateObject = {
  origin: false,
  darkMode: true,
}

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  }
})

export const {
  setOrigin,
  setDarkMode,
} = appStateSlice.actions;

export default appStateSlice.reducer;