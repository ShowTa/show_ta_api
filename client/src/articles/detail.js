import React, { Component } from 'react';
import { render  } from 'react-dom';
import request from 'superagent';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    this.fetchDeta();
  }

  fetchDeta() {
    request
      .get('http://localhost:3000' + this.props.match.url)
      .end((err, res) => {
        this.setState({
          article: res.body
        });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.article.title}</h1>
        <article>{this.state.article.content}</article>
      </div>
    );
  }
}

