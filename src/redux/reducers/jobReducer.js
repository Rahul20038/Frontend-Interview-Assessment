const initialState = {
  jobs: [],
  loading: false,
  error: null,
  offset: 0,
  hasMore: true,
};

function jobReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_JOBS_START':
      return { ...state, loading: true };
    case 'FETCH_JOBS_SUCCESS':
      return { ...state, jobs: [...state.jobs, ...action.payload.jobs], loading: false, offset: state.offset + action.payload.jobs.length, hasMore: action.payload.jobs.length > 0 };
    case 'FETCH_JOBS_FAILURE':
      return { ...state, loading: false, error: action.payload.error, hasMore: false };
    default:
      return state;
  }
}

export default jobReducer;
