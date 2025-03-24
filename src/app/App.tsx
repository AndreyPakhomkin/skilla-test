import React, { StrictMode } from 'react';
import CallsTablePage from '../pages/CallsTablePage';
import { Provider } from 'react-redux';
import store from './providers/store';

function App() {
  return (
    <Provider store={store}>
      <CallsTablePage />
    </Provider>
  );
}

export default App;
