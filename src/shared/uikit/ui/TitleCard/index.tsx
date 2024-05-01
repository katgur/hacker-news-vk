import { ReactNode } from "react";
import { Div, Title, Headline } from "@vkontakte/vkui";
import style from "./style.module.css";

interface TitleCardProps {
  title: string;
  headline: string;
  children: ReactNode;
}

function TitleCard({ title, headline, children }: TitleCardProps) {
  return (
    <Div>
      <Title className={style.title}>{title}</Title>
      <Headline level="1" className={style.headline}>
        {headline}
      </Headline>
      {children}
    </Div>
  );
}

export default TitleCard;
