import React from 'react';
import { CircularProgress, withStyles } from '@material-ui/core';

import styles from './styles';

const CircularIndeterminate = ({ classes }) => (
  <CircularProgress className={classes.centered} />
);

export default withStyles(styles)(CircularIndeterminate);
