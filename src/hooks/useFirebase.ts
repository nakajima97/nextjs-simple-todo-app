import { getAuth } from 'firebase/auth';

import { getApp } from '@/libs/firebase';

const useFirebase = () => {
  const app = getApp();
  const auth = getAuth(app);
  const user = auth.currentUser;

  // 認証ステータスやユーザー情報を返却する
  return { app, auth, user, isAuthenticated: !!user };
};

export default useFirebase;