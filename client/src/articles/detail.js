import React, { Component } from 'react';
import { render  } from 'react-dom';

const REQUEST_URL = 'http://localhost:3000/articles/show';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {status: true};
  }

  render() {
    return (
      <div>
        show
      </div>
    );
  }
}

