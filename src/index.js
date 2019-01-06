import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import ContectUs from './components/contectUs';
import FtechPost from './components/fetchPost';
import PostNew from './components/post_new';
import reducers from './reducers';
import promise from 'redux-promise';
import { domainToASCII } from 'url';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/New" component={PostNew} />
          <Route path="/posts" component={FtechPost} />
          <Route path="/contect" component={ContectUs} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
