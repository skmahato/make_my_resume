import React, { useState } from 'react';

import SignUp from './SignUp';
import SignIn from './SignIn';

const Authenticate = () => {
  const [signInOpen, setSignInOpen] = useState(false);

  if (signInOpen) return <SignUp onSignInClick={setSignInOpen} />;
  return <SignIn onSignUpClick={setSignInOpen} />;
};

export default Authenticate;
