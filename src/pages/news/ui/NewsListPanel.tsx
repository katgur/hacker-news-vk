import { Panel, PanelHeader } from "@vkontakte/vkui";
import { NewsListGroup } from "widgets/news";

interface NewsListPanelProps {
  id: string;
}

function NewsListPanel({ id }: NewsListPanelProps) {
  return (
    <Panel id={id}>
      <PanelHeader>Recent News</PanelHeader>
      <NewsListGroup />
    </Panel>
  );
}

export default NewsListPanel;
