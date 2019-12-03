import React from 'react';
import { Grid, withStyles } from '@material-ui/core';

import ResumeCard from './ResumeCard';
import styles from './styles';

const ResumeList = ({ classes, resumes, handleEdit, handleDelete }) => (
  <div className={classes.root}>
    <Grid container spacing={3}>
      {resumes.map(resume => (
        <ResumeCard
          key={resume.id}
          resume={resume}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </Grid>
  </div>
);

export default withStyles(styles)(ResumeList);
