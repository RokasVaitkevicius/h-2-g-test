import React from 'react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import './App.css';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/rootReducer';
import Routes from './Routes';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const browserHistory = createBrowserHistory();

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Routes />
    </Router>
  </Provider>
);

export default App;
