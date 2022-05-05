import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type stateType = {
  status: string;
  searchKey: string;
  page: number;
};
const initialState: stateType = {
  status: "",
  searchKey: "",
  page:1
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    getStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    getSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
    setPage:(state,action:PayloadAction<number>) => {
      state.page = action.payload;
    }
  },
});
export const { getStatus, getSearchKey ,setPage} = searchSlice.actions;
export default searchSlice.reducer;
