import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import { AuthContext } from './AuthProvider';
import Login from '../pages/Login';

/**
 * 認証を許可されたユーザーのみがアクセスできる Priavte Route を作成。
 * AuthContext から渡された currentUser がセットされていればアクセスを許可し、
 * セットされていない(null)場合は Login ページに遷移させる。
 */
type PrivateRouteProps = {
  exact: boolean;
  path: string;
  component: React.FC<[]>;
};

const PrivateRoute = ({
  component: RouteComponent,
  ...options
}: PrivateRouteProps): JSX.Element => {
  // 現在ログインしているユーザーを AuthContext から取得する
  const { currentUser } = useContext(AuthContext);
  // currentUser の状態によって、遷移させるコンポーネントを設定する
  const Component = currentUser ? RouteComponent : Login;

  return <Route {...options} component={Component} />;
};

export default PrivateRoute;
