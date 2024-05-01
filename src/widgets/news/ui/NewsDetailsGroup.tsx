import { useQuery } from "@tanstack/react-query";
import { Icon24ExternalLinkOutline } from "@vkontakte/icons";
import { RouterLink } from "@vkontakte/vk-mini-apps-router";
import { Button, Div, Group, Header, Link } from "@vkontakte/vkui";
import { CommentsGroup } from "entities/comments";
import { getNewsDetailsById } from "entities/news/api";
import { mapTimeToDate } from "shared/mappers";
import { InfiniteScrollPagination } from "shared/pagination";
import { TitleCard } from "shared/uikit";

interface NewsDetailsGroupProps {
  id: number;
}

function NewsDetailsGroup({ id }: NewsDetailsGroupProps) {
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
    <Group>
      <Div>
        <RouterLink to="/">Back to news list</RouterLink>
      </Div>
      <TitleCard
        title={data.title}
        headline={`${data.by} ${mapTimeToDate(data.time)}`}
      >
        <Link href={data.url} target="_blank">
          {data.url} <Icon24ExternalLinkOutline width={16} height={16} />
        </Link>
      </TitleCard>
      <Header
        aside={
          <Button type="button" onClick={() => refetch()}>
            Refresh comments
          </Button>
        }
      >
        {`Comments (${data.kids?.length || 0})`}
      </Header>
      {data.kids && (
        <InfiniteScrollPagination
          skip={10}
          total={data.kids.length}
          items={data.kids}
          renderView={(id) => <CommentsGroup id={id} />}
        />
      )}
    </Group>
  );
}

export default NewsDetailsGroup;
