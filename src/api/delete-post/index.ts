import { api } from "..";
import { mock } from "./mock";
import { type DeletePostResponse } from "./response";

export const deletePost = async (id: string): Promise<DeletePostResponse> => {
  if (process.env.NEXT_PUBLIC_IS_MOCK === "true") {
    return await new Promise((resolve) => {
      resolve(mock);
    });
  }

  return await api
    .delete<DeletePostResponse>(`/posts/${id}`)
    .then((res) => res.data);
};
