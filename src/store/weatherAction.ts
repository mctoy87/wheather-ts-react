import { createAsyncThunk } from "@reduxjs/toolkit";

export const weatherRequestAsync = createAsyncThunk(
  'weather/fetch',
  async (city:string) => {
    const response:Response = await fetch(``);
    if(response.ok && response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
)