import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createBrowserRouter,
} from "@vkontakte/vk-mini-apps-router";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";

export const rootId = "default_root";
export const viewId = "default_view";
export const listPanelId = "list_panel";
export const detailsPanelId = "details_panel";

const router = createBrowserRouter([
  {
    path: "/",
    panel: listPanelId,
    view: viewId,
    root: rootId,
  },
  {
    path: "/:id",
    panel: detailsPanelId,
    view: viewId,
    root: rootId,
  },
]);

const queryClient = new QueryClient();

interface AppConfigProps {
  children: ReactNode;
}

function AppConfig({ children }: AppConfigProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <AdaptivityProvider>
          <AppRoot>
            <RouterProvider router={router}>{children}</RouterProvider>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default AppConfig;
