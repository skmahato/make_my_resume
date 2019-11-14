import React, { useState } from 'react';

import SignUp from './SignUp';
import SignIn from './SignIn';

const Authenticate = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  if (signInOpen) return <SignIn onSignUpClick={setSignInOpen} />;
  return <SignUp onSignInClick={setSignInOpen} />;
};

export default Authenticate;
