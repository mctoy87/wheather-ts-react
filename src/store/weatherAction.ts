import { createAsyncThunk } from "@reduxjs/toolkit";



export const weatherRequestAsync = createAsyncThunk(
  'weather/fetch',
  async (city:string) => {
    const response:Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37a2b96b28ee64d787ef41a13cbd2d3a&lang=ru&units=metric`);
    if(response.ok && response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
)