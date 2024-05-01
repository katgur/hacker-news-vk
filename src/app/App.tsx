import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";
import { Root, View } from "@vkontakte/vkui";
import { NewsDetailsPanel, NewsListPanel } from "pages/news";
import { detailsPanelId, listPanelId, rootId, viewId } from "./AppConfig";
import "@vkontakte/vkui/dist/vkui.css";

function App() {
  const { view: activeView, panel: activePanel } = useActiveVkuiLocation();

  return (
    <Root id={rootId} activeView={activeView || viewId}>
      <View id={viewId} activePanel={activePanel || listPanelId}>
        <NewsListPanel id={listPanelId} />
        <NewsDetailsPanel id={detailsPanelId} />
      </View>
    </Root>
  );
}

export default App;
