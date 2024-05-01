import { isNumber, isNumberArray, isString } from "shared/typeGuards";

export interface GetNewsDetailsByIdResponse {
  id: number;
  title: string;
  by: string;
  time: number;
  kids?: number[];
  url: string;
  descendants: number;
  score: number;
}

export function isGetNewsDetailsByIdResponse(
  unknownType: unknown,
): unknownType is GetNewsDetailsByIdResponse {
  const response = unknownType as GetNewsDetailsByIdResponse;
  return (
    isNumber(response.id) &&
    isString(response.title) &&
    isString(response.by) &&
    isNumber(response.time) &&
    (response.kids === undefined || isNumberArray(response.kids)) &&
    isNumber(response.score)
  );
}
