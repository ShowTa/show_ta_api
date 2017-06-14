import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './layout/header';
import Footer from './layout/footer';
import Articles from './articles/articles';
import Detail from './articles/detail';
import Form from './articles/form';

render ((
  <Router>
    <div>
      <Header />
      <Switch>
        <div className='content'>
          <Route exact path='/' component={Articles} />
          <Route path='/articles/detail' component={Detail} />
          <Route path='/form' component={Form} />
        </div>
      </Switch>
      <Footer />
    </div>
  </Router>
  ), document.getElementById('app')
);

