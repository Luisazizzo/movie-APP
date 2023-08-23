import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interface/IUser";

const initialState: IUser = {
  email: "",
  password: "",
  username: "",
  isLogged: false,
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    retrieveUser: (_, { payload }: PayloadAction<IUser>) => {
      localStorage.setItem("users", JSON.stringify(payload));

      return payload;
    },
    logUser: (state, { payload }: PayloadAction<boolean>) => {
      localStorage.setItem(
        "users",
        JSON.stringify({ ...state, isLogged: payload })
      );
      return { ...state, isLogged: payload };
    },
    removeUser: () => {
      localStorage.removeItem("users");
      return initialState;
    },
    changePass: (state, { payload }: PayloadAction<string>) => {
      localStorage.setItem(
        "users",
        JSON.stringify({ ...state, password: payload })
      );
      return { ...state, password: payload };
    },
  },
});

export const { retrieveUser, logUser, removeUser, changePass } =
  usersSlice.actions;
export default usersSlice.reducer;
