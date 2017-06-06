import React, { Component } from 'react';
import { render } from 'react-dom';
import request from 'superagent';

const REQUEST_URL = 'http://localhost:3000/articles';

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    request
      .get(REQUEST_URL)
      .end((err, res) => {
        console.log(res.text);
        console.log(res.body);
        this.setState({
          data: res.body
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map((item) => {
          return(
            <li key={item.id}>{item.title}</li>
          );
        })}
      </ul>
    );
  }
}

