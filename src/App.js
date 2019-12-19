import React, { Component } from "react";
import './App.scss';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//Pages
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AboutPage from './pages/AboutPage/AboutPage';
import TestPage from './pages/TestPage/TestPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ArchivePage from './pages/ArchivePage/ArchivePage';

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/testpage" component={TestPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/archive" component={ArchivePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  }
}

export default App;
