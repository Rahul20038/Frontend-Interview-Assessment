import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography color="textSecondary">{job.companyName}</Typography>
        <Typography>{job.location}</Typography>
        <Typography noWrap>{job.description}</Typography>
        <Typography>{`Experience Required: ${job.experience}`}</Typography>
        <Button variant="contained" color="primary">Apply</Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
