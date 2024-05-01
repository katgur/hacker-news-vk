import { useParams } from "@vkontakte/vk-mini-apps-router";
import { Panel } from "@vkontakte/vkui";
import { NewsDetailsGroup } from "widgets/news";

interface NewsDetailsPanelProps {
  id: string;
}

function NewsDetailsPanel({ id }: NewsDetailsPanelProps) {
  const params = useParams<"id">();

  if (!params?.id) {
    return;
  }

  return (
    <Panel id={id}>
      <NewsDetailsGroup id={+params.id} />
    </Panel>
  );
}

export default NewsDetailsPanel;
