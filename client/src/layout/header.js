import React, { Component } from 'react';
import { render } from 'react-dom';

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
            <li className='header__list__create-article'>New</li>
          </ul>
        </div>
      </header>
    );
  }
}

