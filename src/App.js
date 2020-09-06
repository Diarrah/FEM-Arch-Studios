import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResizeContextProvider from './context/resize';
import { Home, About, Portfolio, Contact } from './MainPages';
import { Navbar, Footer } from './components';
import './App.scss';

const App = () => (
  <Router>
    <ResizeContextProvider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </ResizeContextProvider>
  </Router>   
);

export default App;