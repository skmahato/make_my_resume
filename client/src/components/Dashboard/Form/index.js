import React, { useState } from 'react';
import { isEmpty } from 'lodash';
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

import Alert from '../../Common/Alert';
import styles from './styles';

const Form = ({ isOpen, classes, handleFormClose, handleFormSubmit, resume = {} }) => {
  const [title, setTitle] = useState(resume.title || '');
  const [description, setDescription] = useState(resume.description || '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    return handleFormSubmit({ title, description })
      .then((response) => {
        if (response.error) setError(response.payload.response.errors.join(', '));
        return response;
      });
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
          {error && <Alert error={error} />}

          <TextField
            fullWidth
            required
            label="Title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            margin="normal"
            variant="outlined"
            className={classes.textField}
            InputLabelProps={{ className: classes.label }}
            InputProps={{ classes: { input: classes.inputTitle } }}
          />

          <TextField
            fullWidth
            label="Description"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
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
            {isEmpty(resume) ? 'Create' : 'Update'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default withStyles(styles)(Form);
