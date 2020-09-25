import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { NativeRouter, Route } from "react-router-native";
import Home from "../screens/Home";
import Account from "../screens/Account";
import { PageWrapper } from "../screens/PageWrapper";

const Router = ({ history }) => (
  <NativeRouter>
    <ConnectedRouter history={history}>
      <PageWrapper history={history}>
        <Route path="/" component={Home} exact={true} />
        <Route path="/account" component={Account} />
      </PageWrapper>
    </ConnectedRouter>
  </NativeRouter>
);

export default Router;
