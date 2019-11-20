import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import NoResumeMessage from './NoResumeMessage';
import styles from './styles';

function Dashboard({ classes }) {
  const onAddClick = () => {
    console.log('click');
  };

  return (
    <>
      <NoResumeMessage handleFormOpen={onAddClick} />

      <Fab
        title="New Resume"
        className={classes.fab}
        color="primary"
        onClick={onAddClick}
      >
        <AddIcon />
      </Fab>
    </>
  );
}

export default withStyles(styles)(Dashboard);
