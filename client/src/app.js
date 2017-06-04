import React from 'react';
import { render } from 'react-dom';
import Articles from './articles/articles';


class App extends React.Component {
  render() {
    return (
      <div>
        <Articles />
      </div>
    );
  }
};

render (
  <App />,
  document.getElementById('app')
)

