import { api } from "..";
import { mock } from "./mock";
import { type GetPostResponse } from "./response";

export const getPost = async (id: string): Promise<GetPostResponse> => {
  if (process.env.NEXT_PUBLIC_IS_MOCK === "true") {
    return await new Promise((resolve) => {
      resolve(mock);
    });
  }

  return await api.get<GetPostResponse>(`/posts/${id}`).then((res) => res.data);
};
