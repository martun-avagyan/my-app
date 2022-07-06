import axios from "axios";
import { IUserInterface } from "../components/Users/model";
import { IUserPosts } from "../components/UserPosts/model";
import { IUserAlbums, IUserComments, IUserPhotos, IUserTodos } from "./models";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = (): Promise<IUserInterface[]> =>
  api.get("/users").then((res) => res.data);

export const getPosts = (): Promise<IUserPosts[]> =>
  api.get("/posts").then((res) => res.data);

export const getAlbums = (): Promise<IUserAlbums[]> =>
  api.get("/albums").then((res) => res.data);

export const getPhotos = (): Promise<IUserPhotos[]> =>
  api.get("/photos").then((res) => res.data);

export const getTodos = (): Promise<IUserTodos[]> =>
  api.get("/todos").then((res) => res.data);

export const getComments = (): Promise<IUserComments[]> =>
  api.get("/comments").then((res) => res.data);
