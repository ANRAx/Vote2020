import React from 'react';
import SignUp from './buttonComponents/SignUp';
import LogIn from './buttonComponents/Login';

const Header = () => {
  return (
    <header>
      <SignUp />
      <LogIn />
    </header>
  );
};

export default Header;
