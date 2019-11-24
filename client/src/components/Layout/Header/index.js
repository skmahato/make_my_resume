import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './styles';

function Header({ classes, onClick, currentUser }) {
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.banner} noWrap>
          <Link to="/" className={classes.bannerLink}>My Resume</Link>
        </Typography>

        <Typography className={classes.email} noWrap>
          {currentUser.email}
        </Typography>

        <Button
          variant="outlined"
          className={classes.button}
          onClick={onClick}
        >
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
