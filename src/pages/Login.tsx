import React, { useContext } from 'react';

import { AuthContext } from '../auth/AuthProvider';

const Login = (): JSX.Element => {
  // AuthContext から login 関数を受け取る
  const { login } = useContext(AuthContext);

  // ログインボタンが押されたら発火する。
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // event 処理を一時停止させる
    event.preventDefault();

    // email と password の内容を取得
    let email = '';
    let password = '';
    Array.prototype.forEach.call(event.currentTarget.elements, (element) => {
      if (element.name === 'email') email = element.value;
      if (element.name === 'password') password = element.value;
    });

    // AuthProvider の login 関数を使用
    login ? login(email, password) : null;
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
