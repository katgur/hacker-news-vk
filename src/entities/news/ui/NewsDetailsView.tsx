interface NewsDetailsProps {
  id: number;
  link: string;
  title: string;
  date: string;
  author: string;
  commentsCount: number;
}

function NewsDetails(props: NewsDetailsProps) {
  return <div>{JSON.stringify(props)};</div>;
}

export default NewsDetails;
