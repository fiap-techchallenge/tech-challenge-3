import { type GetListPostsResponse } from "./response";

export const mock: GetListPostsResponse = [
  {
    id: 1,
    title: "Post 1",
    content: "Content 1",
    author: "Author 1",
    createdAt: "2021-07-01T00:00:00.000Z",
    updatedAt: "2021-09-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Content 2",
    author: "Author 2",
    createdAt: "2022-02-02T00:00:00.000Z",
    updatedAt: "2021-09-02T00:00:00.000Z",
  },
];
