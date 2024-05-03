import React from 'react';
import JobList from './components/JobList';
import Filters from './components/Filters';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Filters />
        <JobList />
      </div>
    </Provider>
  );
}

export default App;
