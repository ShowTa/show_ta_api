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
      <div className='article-form'>
        <div className='article-form__header'>
          <span className='article-form__header__title'>記事を入力</span>
          <button className='article-form__header__submit' type='submit' onClick={this.postData.bind(this)}>Send</button>
        </div>
        <input className='article-form__input' type='text' ref='title' placeholder='タイトル' /><br />
        <textarea className='article-form__textarea' type='text' ref='content' placeholder='学んだことを共有しよう' /><br />
      </div>
    );
  }
}

