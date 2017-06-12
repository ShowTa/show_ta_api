import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {status: true};
  }

  render() {
    return (
      <header className='header'>
        <span className='header__title'>Show_Ta</span>
        <div className='header__list'>
          <ul>
            <li className='header__list__create-article'>
              <Link to='/form'>New</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

