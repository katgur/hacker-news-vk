import { Panel, PanelHeader } from "@vkontakte/vkui";
import { NewsListGroup } from "widgets/news";

function NewsListPanel({ id }: { id: string }) {
  return (
    <Panel id={id}>
      <PanelHeader>Recent News</PanelHeader>
      <NewsListGroup />
    </Panel>
  );
}

export default NewsListPanel;
