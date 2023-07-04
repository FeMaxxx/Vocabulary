// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { User } from "../../types/users";

// axios.defaults.baseURL = "";

// export const getUsers = createAsyncThunk("users/get", async (_, thunkAPI) => {
//   try {
//     const res = await axios.get(`tweets`);

//     return res.data;
//   } catch (error: any) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const changeUser = createAsyncThunk(
//   "user/change",
//   async (user: User, thunkAPI) => {
//     try {
//       const res = await axios.put(`tweets/${user.id}`, user);

//       return res.data;
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
