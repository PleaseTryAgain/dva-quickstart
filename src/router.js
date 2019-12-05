import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Example from './components/Example';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <IndexPage />
        <Switch>
          <Route path="/pro" component={Products} />
        </Switch>
        <Example />
      </div>
    </Router>
  );
}

export default RouterConfig;
