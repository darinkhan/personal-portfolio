import './App.css';
import { Component } from 'react';
import { Route, Switch } from "react-router";
import Container from "@material-ui/core/Container";
// Pages:
import TempPage from "./pages/TempPage.js";
import Main from "./pages/Main";
import MyWork from "./pages/MyWork";

class App extends Component {
  render() {
    return(
      <Container>
        <Switch>
          <Route exact path="/">
            <TempPage />
          </Route>
          <Route exact path="/about-me">
            <Main />
          </Route>
          <Route exact path="my-work">
            <MyWork />
          </Route>
        </Switch>
      </Container>
  );
  }
}

export default App;
