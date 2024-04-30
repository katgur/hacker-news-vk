import { isNumberArray } from "shared/typeGuards";

export type GetAllRecentNewsResponse = number[];

export function isGetAllRecentNewsResponse(
  unknownType: unknown,
): unknownType is GetAllRecentNewsResponse {
  return isNumberArray(unknownType);
}
