import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import createStore from './redux/createStore';
import { themeReducer } from './redux/reducer';

const store = createStore(themeReducer);

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return { store }; // 将store放在context中
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
