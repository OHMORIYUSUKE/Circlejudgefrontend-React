import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Top from "./Pages/Top";
import Game from "./Pages/Game";
import Pokemon from "./Pages/Pokemon";

function App() {
  const history = useHistory();
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/pokemon" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
