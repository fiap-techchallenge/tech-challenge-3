import { api } from "..";
import { mock } from "./mock";
import { type UpdatePostRequest } from "./request";
import { type UpdatePostResponse } from "./response";

export const updatePost = async (
  id: string,
  request: UpdatePostRequest
): Promise<UpdatePostResponse> => {
  if (process.env.NEXT_PUBLIC_IS_MOCK === "true") {
    return await new Promise((resolve) => {
      resolve(mock);
    });
  }

  return await api.put(`/posts/${id}`, request);
};
