import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArticlesContainer from './components/ArticlesContainer'
import Article from './components/Article'
import Header from './components/Header'
import FooterPage from './components/Footer'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Switch>                      
            <Route path="/article/:id" component={Article}/>
            <Route path="/article" exact component={ArticlesContainer}/>            
            <Route path="/" exact component={ArticlesContainer}/>
            <Route render={({location}) => (
              <div className='io inverted red segment'>
                <h3>
                  Error, there is no such link as {location.pathname}
                </h3>
              </div>
            )} />
          </Switch>
          <FooterPage />
      </div>
    </Router>
  );
}

export default App;
