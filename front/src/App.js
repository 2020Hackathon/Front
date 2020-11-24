import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as Pages from './pages';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact="/Home" component={Pages.Home} />
      <Route exact="/Login" component={Pages.LoginPage}/>
    </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;
