import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { AuthContext } from '../auth/AuthProvider';
import { useLoginStyles } from '../styles/LoginStyles';

const Login = (): JSX.Element => {
  // ログインページ用の Styles を作成
  const classes = useLoginStyles();
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="メールアドレス"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            ログイン
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
