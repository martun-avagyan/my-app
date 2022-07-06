import { getPosts } from "../../../api/api";
import { TAppThunk } from "../../store";
import { setLoading, setUsersState } from "./usersSlice";

export const fetchUsersPosts = (): TAppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await getPosts();
    // setPosts(data);
    dispatch(setUsersState(data));
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
  }
};
