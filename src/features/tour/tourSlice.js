import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  tour: null,
};

export const getSingleTour = createAsyncThunk(
  "tour/ getSingleTour",
  async (tourId, thunkAPI) => {
    try {
      console.log("sfsdfd");
      const res = await customFetch.get(`/tours/${tourId}`);
      return res.data.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const tourSlice = createSlice({
  name: "tour",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSingleTour.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleTour.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tour = payload.data;
      })
      .addCase(getSingleTour.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default tourSlice.reducer;
