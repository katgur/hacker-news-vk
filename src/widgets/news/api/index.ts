import { GetAllRecentNewsResponse, isGetAllRecentNewsResponse } from "./types";

const url = " https://hacker-news.firebaseio.com/v0";

export async function getAllRecentNews(): Promise<GetAllRecentNewsResponse> {
  const response = await fetch(`${url}/newstories.json`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const json = await response.json();
  if (!isGetAllRecentNewsResponse(json)) {
    throw new Error("Wrong data from server");
  }
  return json;
}
