import { FC, useCallback, useEffect, useState } from "react";
import { getPosts } from "../../api/api";
import { IUserPosts } from "./model";

interface IUserPostsProps {
  clickedUser: number;
}

const UserPosts: FC<IUserPostsProps> = ({ clickedUser }): JSX.Element => {
  const [posts, setPosts] = useState<IUserPosts[]>([]);

  console.log(clickedUser, "clickedUser");
  console.log(posts);
  const getUserPosts = useCallback(async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <>
      <h1>UserPosts</h1>
      {posts?.map(({ userId, title }) => {
        if (userId === clickedUser) {
          return <div>{title}</div>;
        }
      })}
    </>
  );
};

export default UserPosts;
