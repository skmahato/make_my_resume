import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles
} from '@material-ui/core';

import styles from './styles';

const Footer = ({ classes }) => (
  <AppBar
    position="fixed"
    className={classes.appBar}
  >
    <Toolbar className={classes.toolBar}>
      <Typography component="footer" className={classes.typoGraphy} noWrap>
        Copyright &copy;
        {' '}
        {(new Date()).getFullYear()}
        {' '}
        My Resume. All rights reserved.
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Footer);
