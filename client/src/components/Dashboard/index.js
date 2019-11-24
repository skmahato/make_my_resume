import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import NoResumeMessage from './NoResumeMessage';
import ResumeList from './ResumeList';
import Form from './Form';
import { requestResumes } from '../../actions/resumes';
import styles from './styles';

const Dashboard = ({ classes, dispatch }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(requestResumes());
  }, [dispatch]);

  return (
    <>
      <NoResumeMessage handleFormOpen={() => setIsOpen(true)} />

      <ResumeList />

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

const mapStateToProps = ({ resumes }) => ({ resumes });

const dashboardWithStyles = withStyles(styles)(Dashboard);
export default connect(mapStateToProps)(dashboardWithStyles);
