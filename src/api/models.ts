export interface IUserComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IUserAlbums {
  userId: number;
  id: number;
  title: string;
}

export interface IUserTodos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IUserPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
