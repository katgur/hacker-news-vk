import { isNumber, isNumberArray, isString } from "shared/typeGuards";

export interface GetCommentByIdResponse {
  id: number;
  text: string;
  by: string;
  time: number;
  kids?: number[];
}

export function isGetCommentByIdResponse(
  unknownType: unknown,
): unknownType is GetCommentByIdResponse {
  const response = unknownType as GetCommentByIdResponse;
  return (
    isNumber(response.id) &&
    isString(response.text) &&
    isString(response.by) &&
    isNumber(response.time) &&
    (response.kids === undefined || isNumberArray(response.kids))
  );
}
