import { createContext, useContext, useEffect } from "react";
import { api } from "service/api";

type SpotifyState = {
  user: {} | null;
};

const SpotifyContext = createContext({});

export const useSpotify = () => useContext(SpotifyContext);

type SpotifyProviderProps = {
  children: React.ReactNode;
};

export const SpotifyProvider = ({ children }: SpotifyProviderProps): JSX.Element => {
  useEffect(() => {
    api.getUserDetails(process.env.CREATE_REACT_APP_ENDPOINT!).then((res) => {
      console.log(res);
    });
  });

  return <SpotifyContext.Provider value={{}}>{children}</SpotifyContext.Provider>;
};
