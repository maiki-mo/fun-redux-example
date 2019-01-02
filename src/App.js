import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Posts from './Components/Posts';
import PostForm from './Components/PostForm';
import Store from './Store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
            <PostForm />
            <hr />
            <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
