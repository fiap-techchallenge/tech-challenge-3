import { api } from "..";
import { mock } from "./mock";
import { type NewPostRequest } from "./request";
import { type NewPostResponse } from "./response";

export const newPost = async (
  request: NewPostRequest
): Promise<NewPostResponse> => {
  if (process.env.NEXT_PUBLIC_IS_MOCK === "true") {
    return await new Promise((resolve) => {
      resolve(mock);
    });
  }

  return await api.post("/posts", request);
};
