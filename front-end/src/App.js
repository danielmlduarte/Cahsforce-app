import React, { Route, Switch } from 'react-router-dom';

import MainPage from './Pages/MainPage';

function App() {
  return (
    <Switch>
      <Route path="/" component={ MainPage } />
    </Switch>
  );
};

export default App;
