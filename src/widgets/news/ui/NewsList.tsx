import { useQuery } from "@tanstack/react-query";
import NewsPreviewView from "entities/news/ui/NewsPreviewView";
import { InfiniteScrollPagination } from "shared/pagination";
import { getAllRecentNews } from "../api";

function NewsList() {
  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["news"],
    queryFn: () => getAllRecentNews(),
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000,
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
      <h2>Recent News</h2>
      <button type="button" onClick={() => refetch()}>
        Refresh
      </button>
      <InfiniteScrollPagination
        skip={10}
        total={100}
        items={data}
        renderView={(id) => <NewsPreviewView id={id} />}
      />
    </section>
  );
}

export default NewsList;
