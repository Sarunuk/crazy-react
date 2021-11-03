import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AccountInfo } from '../../comonents/account-info/accountInfo';
import { AccountList } from '../../comonents/accounts/accountList';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/accounts" component={AccountList} />
        <Route exact path="/">
          <Redirect to="/accounts" />
        </Route>
        <Route path="/details/:id" component={AccountInfo} />
      </Switch>
    </div>
  );
};