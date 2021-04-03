import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './komponent/home'

function App() {
  return (
   <Router>
      <Switch>
          <Route path="/" component={Home} exact/>
      </Switch>
   </Router>
  );
}

export default App;
