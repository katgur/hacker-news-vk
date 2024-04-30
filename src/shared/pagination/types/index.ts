import { ReactNode } from "react";

export interface PaginationProps {
  skip: number;
  total: number;
  items: number[];
  renderView: (id: number) => ReactNode;
}
