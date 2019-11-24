import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  withStyles
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import GetAppIcon from '@material-ui/icons/GetApp';
import EditIcon from '@material-ui/icons/Edit';

import styles from './styles';

const ResumeList = ({ classes, resumes }) => {
  const card = resume => (
    <Grid key={resume.id} item xs={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {resume.title}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {resume.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <IconButton>
            <ShareIcon />
          </IconButton>

          <IconButton>
            <GetAppIcon />
          </IconButton>

          <IconButton className={classes.expand}>
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {resumes.map(resume => card(resume))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ResumeList);
