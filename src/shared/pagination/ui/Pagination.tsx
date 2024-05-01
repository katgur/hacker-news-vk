import { useState } from "react";
import { Button, Div } from "@vkontakte/vkui";
import { PaginationProps } from "../types";
import style from "./style.module.css";

function Pagination({ skip, total, items, renderView }: PaginationProps) {
  const [limit, setLimit] = useState<number>(Math.min(total, skip));
  return (
    <Div>
      <ul className={style.list}>
        {items.slice(0, limit).map((id) => (
          <li key={id} className={style.item}>
            {renderView(id)}
          </li>
        ))}
      </ul>
      {limit < total && (
        <Button
          type="button"
          onClick={() => setLimit(Math.min(total, limit + skip))}
        >
          Load more
        </Button>
      )}
    </Div>
  );
}

export default Pagination;
