import { useLocalStorage } from "usehooks-ts";

export const useAuth = () => {
  const [thumbnail, setThumbnail] = useLocalStorage("thumbnail", 1);
  const [username, setUsername] = useLocalStorage("username", "Dana Israeli");

  const signIn = () => {
    localStorage.setItem("isAuthenticated", "true");
  };

  const signOut = () => {
    localStorage.removeItem("isAuthenticated");
  };

  const storeTokenInLocalStorage = (token: string) => {
    localStorage.setItem("token", token);
  };

  const getTokenFromLocalStorage = () => {
    localStorage.getItem("token");
  };
  // TODO indexdb

  const isAuthenticated = () =>
    localStorage.getItem("isAuthenticated") === "true";

  return {
    signIn,
    signOut,
    isAuthenticated,
    // storeTokenInLocalStorage,
    // getTokenFromLocalStorage,
    setThumbnail,
    thumbnail,
    username,
  };
};
