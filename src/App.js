import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './komponent/home'
import PTSP from './komponent/ptsp'

function App() {
  return (
   <Router>
      <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/ptsp" component={PTSP}/>
      </Switch>
   </Router>
  );
}

export default App;
