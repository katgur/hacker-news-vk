import { useEffect, useRef, useState } from "react";
import { PaginationProps } from "../types";

function InfiniteScrollPagination({
  skip,
  total,
  items,
  renderView,
}: PaginationProps) {
  const [limit, setLimit] = useState<number>(Math.min(total, skip));
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLimit(Math.min(total, limit + skip));
        }
      },
      { threshold: 1 },
    );

    const target = targetRef.current;
    if (!target) {
      return;
    }

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [targetRef.current]);

  return (
    <div>
      <ul>
        {items.slice(0, limit - 1).map((id) => (
          <li key={id}>{renderView(id)}</li>
        ))}
        <li key={items[limit - 1]} ref={targetRef}>
          {renderView(items[limit - 1])}
        </li>
      </ul>
    </div>
  );
}

export default InfiniteScrollPagination;
