import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import createStore from './redux/createStore';
import { themeReducer } from './redux/reducer';
import Provider from './react-redux/Provider';

const store = createStore(themeReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Content />
        </div>
      </Provider>
    );
  }
}

export default App;
