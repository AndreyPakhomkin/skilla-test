import React from 'react';
import CallsTablePage from '../pages/CallsList/CallsTablePage';
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
