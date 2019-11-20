import React from 'react';
import { Paper, Typography, withStyles } from '@material-ui/core';
import styles from './styles';

const NoResumeMessage = ({ classes, handleFormOpen }) => (
  <Paper className={classes.container}>
    <Typography variant="h6" className={classes.message}>
      No Resumes yet.
    </Typography>

    <Typography variant="caption" className={classes.instruction}>
      Click
      <span role="button" tabIndex="0" className={classes.addResumekAction} onClick={handleFormOpen}>
        Add Resume
      </span>
      to get started.
    </Typography>
  </Paper>
);

export default withStyles(styles)(NoResumeMessage);
