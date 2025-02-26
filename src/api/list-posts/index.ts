import { api } from "..";
import { mock } from "./mock";
import { type GetListPostsResponse } from "./response";

export const listPosts = async (): Promise<GetListPostsResponse> => {
  if (process.env.NEXT_PUBLIC_IS_MOCK === "true") {
    return await new Promise((resolve) => {
      resolve(mock);
    });
  }

  return await api.get<GetListPostsResponse>("/posts").then((res) => res.data);
};
