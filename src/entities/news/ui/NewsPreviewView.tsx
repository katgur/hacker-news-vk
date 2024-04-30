import { useQuery } from "@tanstack/react-query";
import { getNewsDetailsById } from "../api";

interface NewsPreviewProps {
  id: number;
}

function NewsPreviewView({ id }: NewsPreviewProps) {
  const { isPending, error, data } = useQuery({
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

  return <div>{JSON.stringify(data)};</div>;
}

export default NewsPreviewView;
