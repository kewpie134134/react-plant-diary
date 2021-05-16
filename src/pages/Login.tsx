import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import * as H from 'history';

import { AuthContext } from '../auth/AuthProvider';

const Login = ({ history }: { history: H.History }) => {
  // ★ historyとは？？？？
  // AuthContext から login 関数を受け取る
  const { login } = useContext(AuthContext);

  // ログインボタンが押されたら発火する。
  // アップデート後の情報（history）を渡すために、export 時には withRouter(Login) として
  // 渡している（こうすることで、handleSubmit 時にページ遷移を伴うことができる）。
  const handleSubmit = (event: any) => {
    // event 処理を一時停止させる
    event.preventDefault();
    // email と password の内容を取得
    const { email, password } = event.target.elements;
    // AuthProvider の login 関数を使用
    login ? login(email.value, password.value, history) : null;
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="email" />
        </label>
        <label>
          PassWord
          <input name="password" type="password" placeholder="PassWord" />
        </label>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

// アップデート後の history (情報)を渡すために、export で withRouter(Login) を使っている。
export default withRouter(Login);
