import { useQuery } from "@tanstack/react-query";
import { RouterLink, useHref } from "@vkontakte/vk-mini-apps-router";
import { SimpleCell, Text } from "@vkontakte/vkui";
import { mapTimeToDate } from "shared/mappers";
import { getNewsDetailsById } from "../api";

interface NewsPreviewProps {
  id: number;
}

function NewsPreviewCell({ id }: NewsPreviewProps) {
  const { isPending, error, data } = useQuery({
    queryKey: ["newsDetails", id],
    queryFn: () => getNewsDetailsById(id),
    refetchOnWindowFocus: false,
  });
  const href = useHref(id + "");

  if (isPending) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.error(error);
    return <Text>Error while fetching news details</Text>;
  }

  if (!data) {
    return;
  }

  return (
    <RouterLink to={href}>
      <SimpleCell
        subhead={`${data.by} ${mapTimeToDate(data.time)}`}
        after={data.score}
      >
        {data.title}
      </SimpleCell>
    </RouterLink>
  );
}

export default NewsPreviewCell;
