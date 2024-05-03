export const fetchJobs = (limit, offset) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_JOBS_START' });
    try {
      const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ limit, offset })
      });
      const result = await response.json();
      dispatch({ type: 'FETCH_JOBS_SUCCESS', payload: { jobs: result } });
    } catch (error) {
      dispatch({ type: 'FETCH_JOBS_FAILURE', payload: { error: error.toString() } });
    }
  };
};
