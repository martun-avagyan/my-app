import { IUserPosts } from "../../../components/UserPosts/model";

export interface IUsersState {
  loading: boolean;
  errors: {
    users: string;
  };
  data: IUsersStateData;
}

export interface IUsersStateData {
  users: IUserPosts[];
}
