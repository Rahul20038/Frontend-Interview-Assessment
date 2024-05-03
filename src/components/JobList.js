import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/actions/jobActions';
import JobCard from './JobCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, hasMore } = useSelector(state => state.job);

  useEffect(() => {
    dispatch(fetchJobs(10, 0));
  }, [dispatch]);

  return (
    <InfiniteScroll
      dataLength={jobs.length}
      next={() => dispatch(fetchJobs(10, jobs.length))}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {jobs.map(job => <JobCard key={job.id} job={job} />)}
    </InfiniteScroll>
  );
};

export default JobList;
