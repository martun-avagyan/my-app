import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../api/api";
import { IUserInterface } from "./model";

interface IUsersProps {
  setClickedUser: React.Dispatch<React.SetStateAction<number>>;
}

const Users: FC<IUsersProps> = ({ setClickedUser }): JSX.Element => {
  const [users, setUsers] = useState<IUserInterface[]>([]);

  console.log(users);
  const getUsersData = async (): Promise<void> => {
    try {
      const res = await getUsers();
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);
  return (
    <>
      <h1>Test Component</h1>
      {users.map(({ id, name }) => (
        <Link to={`/user/${id}`} key={id} onClick={() => setClickedUser(id)}>
          {name}
        </Link>
      ))}
    </>
  );
};

export default Users;
