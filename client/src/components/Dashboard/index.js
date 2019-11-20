import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import NoResumeMessage from './NoResumeMessage';
import Form from './Form';
import styles from './styles';

const Dashboard = ({ classes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NoResumeMessage handleFormOpen={() => setIsOpen(true)} />
      <Form
        isOpen={isOpen}
        handleFormClose={() => setIsOpen(false)}
      />

      <Fab
        title="New Resume"
        className={classes.fab}
        color="primary"
        onClick={() => setIsOpen(true)}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default withStyles(styles)(Dashboard);
