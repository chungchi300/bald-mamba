/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Router from "./routes";
import configureStore from "./configureStore";
import { Provider as PaperProvider } from "react-native-paper";

const { history, store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
};

export default App;
