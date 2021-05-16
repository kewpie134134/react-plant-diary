import React, { useContext } from 'react';

import { AuthContext } from '../auth/AuthProvider';

const Login = (): JSX.Element => {
  // AuthContext から login 関数を受け取る
  const { login } = useContext(AuthContext);

  // ログインボタンが押されたら発火する。
  // event の型定義 React.FormEvent<HTMLFormElement> での値取得が困難なため、any を使用。
  // eslint-disable-next-line
  const handleSubmit = (event: any) => {
    // event 処理を一時停止させる
    event.preventDefault();
    // email と password の内容を取得
    const { email, password } = event.target.elements;
    // AuthProvider の login 関数を使用
    login ? login(email.value, password.value) : null;
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
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

export default Login;
