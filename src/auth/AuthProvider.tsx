/**
 * 認証に必要なロジックを作成し、必要な情報をコンポーネントツリー全体に渡すために
 * React の Context を使用する
 */

import React, { createContext, ReactNode, useEffect, useState } from 'react';
import * as H from 'history';

import { auth } from '../firebase/Firebase';

// createContext でエラーを回避するために型定義を作成
type ContextProps = {
  currentUser: any;
  login: any;
};

// context の作成
// React.createContext() では初期値が空のためにエラーが返却されるので、
// 以下のようにして型定義をしてエラーを回避。
export const AuthContext = createContext<Partial<ContextProps>>({});

// useContext を使用して、 children （各ページ）で使用できるようにする
export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  // ログインユーザーを格納しておく変数を作成
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  // ユーザーをログインさせる関数
  const login = async (email: string, password: string, history: H.History) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // Context を使用して、認証に必要な情報をコンポーネントツリーに流し込む
    <AuthContext.Provider value={{ login, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
