import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Group, Spinner, Text } from "@vkontakte/vkui";
import { Pagination } from "shared/pagination";
import TextWithLabel from "shared/uikit/ui/TextWithLabel";
import { getCommentById } from "../api";

export interface CommentsGroupProps {
  id: number;
}

function CommentsGroup({ id }: CommentsGroupProps) {
  const { isPending, error, data } = useQuery({
    queryKey: ["comment", id],
    queryFn: () => getCommentById(id),
    refetchOnWindowFocus: false,
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isPending) {
    return <Spinner />;
  }

  if (error) {
    console.error(error);
    return <Text>Error while fetching comment</Text>;
  }

  if (!data) {
    return;
  }

  return (
    <Group>
      <TextWithLabel
        label={`by ${data.by}`}
        after={
          data.kids && (
            <Button mode="link" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Close" : "Open"}
            </Button>
          )
        }
      >
        <div dangerouslySetInnerHTML={{ __html: data.text }} />
      </TextWithLabel>
      {isOpen && data.kids && (
        <Pagination
          skip={10}
          total={data.kids.length}
          items={data.kids}
          renderView={(id) => <CommentsGroup id={id} />}
        />
      )}
    </Group>
  );
}

export default CommentsGroup;
