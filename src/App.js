import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/create">

        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
