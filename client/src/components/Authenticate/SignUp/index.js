import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
  withStyles
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { requestSignup } from '../../../actions/authentication';
import styles from './styles';

function SignUp({ dispatch, classes, onSignInClick }) {
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const passwordConfirmation = e.target.elements.password_confirmation.value;

    if (email && password && passwordConfirmation) {
      const params = { user: { email, password, password_confirmation: passwordConfirmation } };
      dispatch(requestSignup(params)).then((response) => {
        if (response.error) setError(response.payload.response.errors.join(' '));
        return response;
      });
    } else setError('email, password or re-enter password is invalid');
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
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

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password_confirmation"
                label="Re-enter Password"
                type="password"
                id="password-confirmation"
                placeholder="Re-enter Password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Link role="button" onClick={() => onSignInClick(true)} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const componentWithStyles = withStyles(styles)(SignUp);
export default connect()(componentWithStyles);
