import { useLoaderData } from "react-router-dom";

export const Playlist = () => {
  const data = useLoaderData();
  console.log({ data });

  return <div>Hello World</div>;
};
