import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import './App.css';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import ReportPage from './pages/ReportPage';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Confirmation from './pages/Confirmation';
import Review from './components/FormReview';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/report" component={ReportPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={Admin} />
          <Route path="/confirmation" component={Confirmation} />
          <Route path="/review" component={Review} />
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
