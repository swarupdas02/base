import { createSlice } from "@reduxjs/toolkit";

interface StateObject {
  origin: boolean;
}

const initialState: StateObject = {
  origin: false,
}

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
  }
})

export const {
  setOrigin,
} = appStateSlice.actions;

export default appStateSlice.reducer;