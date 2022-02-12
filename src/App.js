import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
        <Route path="/">
        <Shop></Shop>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
