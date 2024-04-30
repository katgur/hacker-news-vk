import { useState } from "react";
import { PaginationProps } from "../types";

function Pagination({ skip, total, items, renderView }: PaginationProps) {
  const [limit, setLimit] = useState<number>(Math.min(total, skip));
  return (
    <div>
      <ul>
        {items.slice(0, limit).map((id) => (
          <li key={id}>{renderView(id)}</li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setLimit(Math.min(total, limit + skip))}
        disabled={limit >= total}
      >
        Load more
      </button>
    </div>
  );
}

export default Pagination;
