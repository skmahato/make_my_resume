import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from './SignIn';

function App({ dispatch, initial }) {
  return <Route path="/" component={SignIn} />
}

export default App;
