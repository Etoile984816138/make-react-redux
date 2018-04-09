import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

// 初始化store
function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }
  dispatch({}); // 初始化 state
  return { getState, dispatch, subscribe };
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
}

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
