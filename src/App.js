import React from 'react';

import AppRoutes from './routing/AppRoutes';
import AppTitle from './components/apptitle';

import './App.css';

const App = () => {
  return (
    <>
      <AppTitle />
      <AppRoutes />
    </>
  );
};

export default App;
