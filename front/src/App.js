import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as Pages from './pages';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/Home" component={Pages.Home} />
      <Route path="/"  exact component={Pages.LoginPage}/>
      <Route path="/SignUp" exact component={Pages.SignUpPage}/>
      <Route path="/MyInfo" exact component={Pages.MyInfoPage}/>
      <Route path="/PostView" exact component={Pages.PostViewPage}/>
    </Switch>
    </BrowserRouter>
    </>

  );
}

export default App;
