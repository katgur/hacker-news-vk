import { useQuery } from "@tanstack/react-query";
import { CommentView } from "entities/comments";
import { NewsDetails } from "entities/news";
import { getNewsDetailsById } from "entities/news/api";
import { InfiniteScrollPagination } from "shared/pagination";

function NewsDetailsView() {
  const id = 40178856;
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["newsDetails", id],
    queryFn: () => getNewsDetailsById(id),
    refetchOnWindowFocus: false,
  });

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
    <section>
      <h2>News Details</h2>
      <NewsDetails
        {...data}
        link={data.url}
        date={data.time + ""}
        author={data.by}
        commentsCount={data.descendants}
      />
      <section>
        <h3>Comments</h3>
        <button type="button" onClick={() => refetch()}>
          Refresh comments
        </button>
        {data.kids && (
          <InfiniteScrollPagination
            skip={10}
            total={data.kids.length}
            items={data.kids}
            renderView={(id: number) => <CommentView id={id} />}
          />
        )}
      </section>
    </section>
  );
}

export default NewsDetailsView;
