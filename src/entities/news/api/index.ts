import {
  GetNewsDetailsByIdResponse,
  isGetNewsDetailsByIdResponse,
} from "./types";

const url = "https://hacker-news.firebaseio.com/v0/item";

export async function getNewsDetailsById(
  id: number,
): Promise<GetNewsDetailsByIdResponse> {
  const response = await fetch(`${url}/${id}.json`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();
  if (!isGetNewsDetailsByIdResponse(json)) {
    throw new Error("Wrong data from server");
  }
  return json;
}
