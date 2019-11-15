import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  Typography,
  Grid,
  TextField,
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
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

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>

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
              <Link
                role="button"
                onClick={() => onSignUpClick(true)}
                variant="body2"
                className={classes.pointer}
              >
                Don&apos;t have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const componentWithStyles = withStyles(styles)(SignIn);
export default connect()(componentWithStyles);
