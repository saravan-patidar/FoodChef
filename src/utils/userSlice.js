import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "admin",
  },
  reducers: {
    changeName: (state, action) => {
      // console.log(action);
      state.userName = action.payload;
    },
  },
});

export const { changeName } = userSlice.actions;
export default userSlice.reducer;
