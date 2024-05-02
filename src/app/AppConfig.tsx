import vkBridge, {
  parseURLSearchParamsForGetLaunchParams,
} from "@vkontakte/vk-bridge";
import { ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  useInsets,
  useAdaptivity,
  useAppearance,
} from "@vkontakte/vk-bridge-react";
import {
  RouterProvider,
  createHashRouter,
} from "@vkontakte/vk-mini-apps-router";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import { ErrorBoundary } from "shared/error";
import { transformVKBridgeAdaptivity } from "./lib";

export const rootId = "default_root";
export const viewId = "default_view";
export const listPanelId = "list_panel";
export const detailsPanelId = "details_panel";

const router = createHashRouter([
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
  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(
    window.location.search,
  );

  useEffect(() => {
    vkBridge.send("VKWebAppInit");
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          appearance={vkBridgeAppearance}
          platform={vk_platform === "desktop_web" ? "vkcom" : undefined}
          isWebView={vkBridge.isWebView()}
          hasCustomPanelHeaderAfter={true}
        >
          <AdaptivityProvider {...adaptivity}>
            <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
              <RouterProvider router={router}>{children}</RouterProvider>
            </AppRoot>
          </AdaptivityProvider>
        </ConfigProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default AppConfig;
