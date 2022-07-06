import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserPosts } from "../../../components/UserPosts/model";
import { IUsersState, IUsersStateData } from "./model";

const initialState: IUsersState = {
  loading: false,
  data: {
    users: [],
  },
  errors: {
    users: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setUsersState: (state, { payload }: PayloadAction<IUserPosts[]>) => {
      state.data.users = payload;
    },
  },
});

export const { setLoading, setUsersState } = usersSlice.actions;

export default usersSlice.reducer;
