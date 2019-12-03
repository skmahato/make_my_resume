import React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  withStyles
} from '@material-ui/core';
import { Share, GetApp, Edit, Delete } from '@material-ui/icons';

import styles from './styles';

const ResumeCard = ({ resume, classes, handleEdit, handleDelete }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.card}>
      <CardHeader
        action={(
          <IconButton onClick={() => handleEdit(resume.id)}>
            <Edit />
          </IconButton>
        )}
        title={resume.title}
        subheader={`Last Updated On: ${resume.updated_at}`}
        subheaderTypographyProps={{ className: classes.updatedAt }}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {resume.description || 'No Description Available'}
        </Typography>
      </CardContent>

      <CardActions>
        <IconButton>
          <Share />
        </IconButton>

        <IconButton>
          <GetApp />
        </IconButton>

        <IconButton onClick={() => handleDelete(resume.id)} className={classes.expand}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  </Grid>
);

export default withStyles(styles)(ResumeCard);
