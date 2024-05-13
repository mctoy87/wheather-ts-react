import { createSlice } from "@reduxjs/toolkit";

export interface IWeather {
  isLoading: boolean;
  error: string;
  weather: any;
};

const initialState:IWeather =  {
  isLoading: false,
  error: '',
  weather: {},
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
});

export default weatherSlice.reducer;