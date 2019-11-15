import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/authentication';

const Layout = ({ dispatch }) => {
  function handleOnClick() {
    dispatch(logout());
  }

  return (
    <button type="button" onClick={() => handleOnClick()}>Logout</button>
  );
};

export default connect()(Layout);
