import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewsDetailsView from "widgets/news/ui/NewsDetailsView";

const queryClient = new QueryClient();

function App() {
  return <QueryClientProvider client={queryClient}><NewsDetailsView /></QueryClientProvider>;
}

export default App;
