import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import "./App.css";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import GlobalStyles from "./Globalstyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default App;
