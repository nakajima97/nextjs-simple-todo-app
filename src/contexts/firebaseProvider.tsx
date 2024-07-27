import { type FirebaseApp, initializeApp, getApp, getApps } from 'firebase/app';
import { type Auth, type UserCredential, getAuth } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

type UserContextType = {
	user: UserCredential | null;
	setUser: (user: UserCredential | null) => void;
};

const AuthContext = createContext<UserContextType>({
	user: null,
	setUser: () => {},
});

const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<UserCredential | null>(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, FirebaseProvider };
