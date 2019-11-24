import React from 'react';
import { Paper, withStyles } from '@material-ui/core';

import styles from './styles';

const Alert = ({ classes, error }) => <Paper className={classes.alert}>{error}</Paper>;

export default withStyles(styles)(Alert);
