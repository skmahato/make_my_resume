import React, { useState } from 'react';
import {
  Button,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  withStyles
} from '@material-ui/core';

import styles from './styles';

const Form = ({ isOpen, classes, handleFormClose }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Dialog
      fullWidth
      open={isOpen}
      onClose={handleFormClose}
    >
      <DialogTitle>New Resume</DialogTitle>
      <Divider variant="middle" />

      <form className={classes.form} onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            fullWidth
            required
            label="Resume Title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            margin="normal"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{ className: classes.label }}
            InputProps={{ classes: { input: classes.inputTitle } }}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleFormClose} color="primary">
            Cancel
          </Button>

          <Button type="submit" color="primary">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default withStyles(styles)(Form);
