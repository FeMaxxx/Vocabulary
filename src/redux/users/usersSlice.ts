// import { createSlice } from "@reduxjs/toolkit";
// import { getUsers } from "./operations";
// import { usersState } from "../../types/users";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";

// const initialState: usersState = {
//   users: [],
//   loading: false,
//   error: false,
//   follow: [],
// };

// export const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     addFollow(state, action) {
//       state.follow.push(action.payload);
//     },
//     removeFollow(state, action) {
//       const index = state.follow.indexOf(action.payload);
//       state.follow.splice(index, 1);
//     },
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(getUsers.fulfilled, (state, action) => {
//         state.users = [...state.users, ...action.payload];
//         state.loading = false;
//         state.error = false;
//       })
//       .addCase(getUsers.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getUsers.rejected, (state) => {
//         state.error = true;
//         state.loading = false;
//       }),
// });

// const persistConfig = {
//   key: "users",
//   storage,
//   whitelist: ["follow"],
// };

// export const usersReducer = persistReducer(persistConfig, usersSlice.reducer);

// export const { addFollow, removeFollow } = usersSlice.actions;
