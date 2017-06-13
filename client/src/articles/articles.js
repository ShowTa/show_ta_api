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
        this.setState({
          data: res.body
        });
      });
  }

  render() {
    return (
      <div className='articles'>
        <ul>
          {this.state.data.map((item) => {
            return(
              <div className='article' key={item.id}>
                <li className='article__title'>{item.title}</li>
                <li className='article__content'>{item.content}</li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

