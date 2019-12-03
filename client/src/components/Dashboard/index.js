import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import NoResumeMessage from './NoResumeMessage';
import ResumeList from './ResumeList';
import Form from './Form';
import { requestResumes, addNewResume, updateResumeDetails, deleteResume } from '../../actions/resumes';
import styles from './styles';

const Dashboard = ({ classes, dispatch, resumes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editableId, setEditableId] = useState(null);

  useEffect(() => {
    dispatch(requestResumes());
  }, [dispatch]);

  const handleFormClose = () => {
    setIsOpen(false);
    setEditableId(null);
  };

  const handleFormSubmit = (params) => {
    if (editableId) {
      return dispatch(updateResumeDetails(editableId, params))
        .then((response) => {
          if (!response.error) setIsOpen(false);
          return response;
        });
    }

    return dispatch(addNewResume(params))
      .then((response) => {
        if (!response.error) setIsOpen(false);
        return response;
      });
  };

  const handleEdit = (id) => {
    setEditableId(id);
    setIsOpen(true);
  };

  const editableResume = resumes.filter(res => res.id === editableId)[0];

  return (
    <>
      {isEmpty(resumes) && <NoResumeMessage handleFormOpen={() => setIsOpen(true)} />}

      {!isEmpty(resumes) && (
        <ResumeList
          resumes={resumes}
          handleEdit={handleEdit}
          handleDelete={id => dispatch(deleteResume(id))}
        />
      )}

      {isOpen && (
        <Form
          isOpen={isOpen}
          handleFormClose={handleFormClose}
          handleFormSubmit={handleFormSubmit}
          resume={editableResume}
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
