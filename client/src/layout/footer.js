import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.State = {status: true};
  }

  render() {
    return (
      <div>
        footer
      </div>
    );
  }
}

