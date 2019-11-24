import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { loadInitial } from '../actions/authentication';
import Authenticate from './Authenticate';
import Layout from './Layout';
import CircularProgress from './Common/CircularProgress';

function App({ dispatch, initial }) {
  useEffect(() => { dispatch(loadInitial()); }, [dispatch]);

  if (initial && initial.status === 'authenticated') {
    return <Route path="/" component={Layout} />;
  } if (initial && (initial.error || initial.status === 'logged_out')) {
    return <Route path="/" component={Authenticate} />;
  }

  return <CircularProgress />;
}

App.propTypes = { initial: PropTypes.object };

const mapStateToProps = ({ initial }) => ({ initial });

export default connect(mapStateToProps)(App);
