import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import NoResumeMessage from './NoResumeMessage';
import ResumeList from './ResumeList';
import Form from './Form';
import { requestResumes, addNewResume } from '../../actions/resumes';
import styles from './styles';

const Dashboard = ({ classes, dispatch, resumes }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(requestResumes());
  }, [dispatch]);

  const handleFormSubmit = params => dispatch(addNewResume(params))
    .then((response) => {
      if (!response.error) setIsOpen(false);
      return response;
    });

  return (
    <>
      {isEmpty(resumes) && <NoResumeMessage handleFormOpen={() => setIsOpen(true)} />}

      {!isEmpty(resumes) && <ResumeList resumes={resumes} />}

      {isOpen && (
        <Form
          isOpen={isOpen}
          handleFormClose={() => setIsOpen(false)}
          handleFormSubmit={handleFormSubmit}
        />
      )}

      <Fab
        title="New Resume"
        className={classes.fab}
        color="primary"
        onClick={() => setIsOpen(true)}
        disabled={isOpen}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

const mapStateToProps = ({ resumes }) => ({ resumes: resumes.data });

const dashboardWithStyles = withStyles(styles)(Dashboard);
export default connect(mapStateToProps)(dashboardWithStyles);
