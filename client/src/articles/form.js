import React, { Component } from 'react';
import { render } from 'react-dom';
import request from 'superagent';

const REQUEST_URL = 'http://localhost:3000/articles';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {status: true};
  }

  postData() {
    let title = this.refs.title.value.trim();
    let content = this.refs.content.value.trim();

    request
      .post(REQUEST_URL)
      .send({title: title, content: content})
      .end((err, res) => {
        window.location.href = 'http://localhost:4000/';
      });
  }

  render() {
    return (
      <div>
        <p>記事を入力</p>
        <input type='text' ref='title' />
        <textarea type='text' ref='content' />
        <button type='submit' onClick={this.postData.bind(this)}>Send</button>
      </div>
    );
  }
}

