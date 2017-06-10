import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {status: true};
  }

  render() {
    return (
      <div>
        header
      </div>
    );
  }
}

