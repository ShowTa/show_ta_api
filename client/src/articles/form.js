import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {status: true};
  }

  render() {
    return (
      <div>
        <p>記事を入力</p>
        <form action='/' method='POST'>
          <input type='text' />
          <button type='submit'>a</button>
        </form>
      </div>
    );
  }
}

