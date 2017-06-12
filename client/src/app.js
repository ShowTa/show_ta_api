import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './layout/header';
import Footer from './layout/footer';
import Articles from './articles/articles';
import Form from './articles/form';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>root</Link></li>
          <li><Link to='/articles'>article</Link></li>
          <li><Link to='/form'>test link</Link></li>
        </ul>
      </div>
    );
  }
}

render ((
  <Router>
    <div>
      <Header />
      <Switch>
        <div className='content'>
          <Route exact path='/' component={App} />
          <Route path='/articles' component={Articles} />
          <Route path='/form' component={Form} />
        </div>
      </Switch>
      <Footer />
    </div>
  </Router>
  ), document.getElementById('app')
);

