import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Top from "./Pages/Top";

function App() {
  const history = useHistory();
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={Top} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
