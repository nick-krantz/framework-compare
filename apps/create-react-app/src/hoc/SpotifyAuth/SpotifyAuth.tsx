import { useEffect, useState } from "react";
import { api } from "service/api";

type SpotifyAuthProps = {
  children: React.ReactNode;
};

/** Block the UI until spotify auth endpoint returns successful login */
export const SpotifyAuth = ({ children }: SpotifyAuthProps): JSX.Element | null => {
  const [{ isLoggedIn }, setState] = useState<{ isLoggedIn: boolean }>({ isLoggedIn: false });
  useEffect(() => {
    api.isLoggedIn(process.env.REACT_APP_ENDPOINT!).then((res) => {
      if (res) {
        setState({ isLoggedIn: res });
      }
    });
  }, []);

  if (!isLoggedIn) {
    return null;
  }

  return <>{children}</>;
};
