import { User } from "framework-compare-types";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "service/api";

type SpotifyState = {
  user: User | null;
};

const SpotifyContext = createContext<SpotifyState>({ user: null });

export const useSpotify = () => useContext(SpotifyContext);

type SpotifyProviderProps = {
  children: React.ReactNode;
};

export const SpotifyProvider = ({ children }: SpotifyProviderProps): JSX.Element => {
  const [{ user }, setUser] = useState<SpotifyState>({ user: null });
  useEffect(() => {
    api.getUserDetails(process.env.REACT_APP_ENDPOINT!).then((res) => {
      if (res) {
        setUser({ user: res });
      }
    });
  }, []);

  return <SpotifyContext.Provider value={{ user }}>{children}</SpotifyContext.Provider>;
};
