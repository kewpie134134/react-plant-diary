import React from 'react';

import { auth } from '../firebase/Firebase';

const Logout = (): JSX.Element => {
  const logOut = () => {
    auth.signOut();
  };
  return <button onClick={logOut}>サインアウト</button>;
};

export default Logout;
