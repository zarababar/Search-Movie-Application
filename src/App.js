import React from 'react';

import AppRoutes from './routing/AppRoutes';
import AppTitle from './components/heading';

import './App.css';

const App = () => {
  return (
    <>
      <AppTitle data={'Movies Search App'} />
      <AppRoutes />
    </>
  );
};

export default App;
