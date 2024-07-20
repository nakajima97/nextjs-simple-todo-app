import { type FirebaseApp, initializeApp } from "firebase/app";
import { type Auth, type UserCredential, getAuth } from "firebase/auth";
import { createContext, useState } from "react";

type UserContextType = {
  user: UserCredential | null;
  setUser: (user: UserCredential | null) => void;
  app: FirebaseApp | null;
};

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const AuthContext = createContext<UserContextType>({
  user: null,
  setUser: () => { },
  app: null
});

const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserCredential | null>(null);
  const app = initializeApp(firebaseConfig);

  return (
    <AuthContext.Provider value={{ user, setUser, app }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, FirebaseProvider };
