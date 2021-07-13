import { createContext, ReactNode, useEffect, useState } from "react";
import { auth, firebase } from "../services/firebase";

type AuthContextType = {
  user: UserType | undefined;
  singInWithGoogle: () => Promise<void>;
};

type UserType = {
  id: string;
  avatar: string;
  name: string;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const unsubscrib = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user) {
          const { photoURL, displayName, uid } = user;

          if (!displayName || !photoURL) {
            throw new Error("Missing Informations from Google Account");
          }

          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
          });
        }
      }
    });

    return () => {
      unsubscrib();
    };
  }, []);

  async function singInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { photoURL, displayName, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing Informations from Google Account");
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ user, singInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}
