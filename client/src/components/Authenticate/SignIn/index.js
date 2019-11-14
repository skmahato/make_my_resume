import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
  Grid,
  Link,
  withStyles
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { requestLogin } from '../../../actions/authentication';
import styles from './styles';

function SignIn({ dispatch, classes, onSignUpClick }) {
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (email && password) {
      dispatch(requestLogin({ email, password })).then((response) => {
        if (response.error) setError('email or password invalid');
        return response;
      });
    } else setError('email or password invalid');
  }

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          {error && (
            <Typography className={classes.errorMessage}>
              {error}
            </Typography>
          )}

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Username</InputLabel>
            <Input id="email" name="email" type="email" autoComplete="email" autoFocus />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link role="button" onClick={() => onSignUpClick(false)} variant="body2">
                Don&apos;t have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </main>
  );
}

const componentWithStyles = withStyles(styles)(SignIn);
export default connect()(componentWithStyles);
