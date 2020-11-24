import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as Pages from './pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Home" component={Pages.Home} />
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
