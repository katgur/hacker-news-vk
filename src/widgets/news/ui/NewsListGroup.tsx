import { useQuery } from "@tanstack/react-query";
import { Button, Div, Group } from "@vkontakte/vkui";
import NewsPreviewCell from "entities/news/ui/NewsPreviewCell";
import { InfiniteScrollPagination } from "shared/pagination";
import { getAllRecentNews } from "../api";

function NewsListGroup() {
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
    <Group>
      <Div>
        <Button type="button" onClick={() => refetch()}>
          Refresh
        </Button>
      </Div>
      <InfiniteScrollPagination
        skip={10}
        total={100}
        items={data}
        renderView={(id) => <NewsPreviewCell id={id} />}
      />
    </Group>
  );
}

export default NewsListGroup;
