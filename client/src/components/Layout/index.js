import React from 'react';
import { connect } from 'react-redux';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Dashboard from '../Dashboard';
import { logout } from '../../actions/authentication';
import styles from './styles';

const Layout = ({ dispatch, classes, initial }) => (
  <div className={classes.root}>
    <CssBaseline />
    <Header
      onClick={() => dispatch(logout())}
      currentUser={initial}
    />

    <main className={classes.content}>
      <div className={classes.drawerHeader} />

      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </main>

    <Footer />
  </div>
);

const mapStateToProps = ({ initial }) => ({ initial });

const componentWithStyles = withStyles(styles)(Layout);
export default connect(mapStateToProps)(componentWithStyles);
