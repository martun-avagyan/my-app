import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { shallowEqual, useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hook";
import { fetchUsersPosts } from "../../store/features/users/usersSliceFunction";
import { TAppDispatch } from "../../store/store";

interface IUserPostsProps {
  clickedUser: number;
}

const UserPosts: FC<IUserPostsProps> = ({ clickedUser }): JSX.Element => {
  const dispatch: TAppDispatch = useDispatch();

  const {
    data: { users },
    loading,
  } = useAppSelector(({ users }) => users, shallowEqual);

  useEffect(() => {
    dispatch(fetchUsersPosts());
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>UserPosts</h1>
          {users.length > 0 &&
            users?.map(({ userId, title, id }) => {
              if (userId === clickedUser) {
                return <div key={id}>{title}</div>;
              }
            })}

          <div>
            <button onClick={() => navigate("../user")}>Back</button>
          </div>
        </>
      )}
    </>
  );
};

export default UserPosts;
