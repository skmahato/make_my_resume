import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { loadInitial } from '../actions/authentication';
import SignIn from './SignIn';

function App({ dispatch, initial }) {
  useEffect(() => { dispatch(loadInitial()); }, [dispatch]);

  if (initial && initial.status === 'authenticated') {
    return <div>Hello</div>;
  } if (initial && (initial.error || initial.status === 'logged_out')) {
    return <Route path="/" component={SignIn} />;
  }

  return null;
}

App.propTypes = { initial: PropTypes.object };

const mapStateToProps = ({ initial }) => ({ initial });

export default connect(mapStateToProps)(App);
