import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './styles';

const ResumeList = ({ classes }) => (
  <div className={classes.list}>
    Resume
  </div>
);

export default withStyles(styles)(ResumeList);
