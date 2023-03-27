import { GetPlaylistResponse } from "framework-compare-api";
import { useLoaderData } from "react-router-dom";

export const PlaylistDetails = () => {
  const response = useLoaderData() as GetPlaylistResponse;
  console.log(response);

  return <div>Hello World</div>;
};
