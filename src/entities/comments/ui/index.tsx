import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "shared/pagination";
import { getCommentById } from "../api";

export interface CommentProps {
  id: number;
}

function CommentView({ id }: CommentProps) {
  const { isPending, error, data } = useQuery({
    queryKey: ["comment", id],
    queryFn: () => getCommentById(id),
    refetchOnWindowFocus: false,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return;
  }

  return (
    <div>
      {JSON.stringify(data)}
      {data.kids && (
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
      )}
      {isOpen && data.kids && (
        <Pagination
          skip={10}
          total={data.kids.length}
          items={data.kids}
          renderView={(id) => <CommentView id={id} />}
        />
      )}
    </div>
  );
}

export default CommentView;
