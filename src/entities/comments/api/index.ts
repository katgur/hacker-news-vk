import { GetCommentByIdResponse, isGetCommentByIdResponse } from "./types";

const url = "https://hacker-news.firebaseio.com/v0/item";

export async function getCommentById(
  id: number,
): Promise<GetCommentByIdResponse> {
  const response = await fetch(`${url}/${id}.json`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();
  if (!isGetCommentByIdResponse(json)) {
    throw new Error("Wrong data from server");
  }
  return json;
}
