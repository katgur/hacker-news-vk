import { ReactNode } from "react";
import { Div, Text } from "@vkontakte/vkui";

interface TextareaProps {
  label: string;
  after: ReactNode;
  children: ReactNode;
}

function TextWithLabel({ label, after, children }: TextareaProps) {
  return (
    <Div>
      <Text weight="2">{label}</Text>
      <Text>{children}</Text>
      {after}
    </Div>
  );
}

export default TextWithLabel;
