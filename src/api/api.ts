import axios from "axios";
import { IUserInterface } from "../components/Users/model";
import { IUserPosts } from "../components/UserPosts/model";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = (): Promise<IUserInterface[]> =>
  api.get("/users").then((res) => res.data);

export const getPosts = (): Promise<IUserPosts[]> =>
  api.get("/posts").then((res) => res.data);
