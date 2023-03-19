import { createContext, useContext, useEffect } from "react"
import { getUserDetails } from "framework-compare-api";

type SpotifyState = {
  user: {} | null;
}

const SpotifyContext = createContext({});

export const useSpotify = () => useContext(SpotifyContext)


type SpotifyProviderProps = {
  children: React.ReactNode;
}

export const SpotifyProvider = ({children}: SpotifyProviderProps): JSX.Element => {

  useEffect(() => {
    getUserDetails(process.env.CREATE_REACT_APP_ENDPOINT!).then((res) => {
      console.log(res);
    })
  })

  return (
    <SpotifyContext.Provider value={{}}>
      {children}
    </SpotifyContext.Provider>
  )
}
