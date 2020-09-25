import { createMemoryHistory } from "history";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
const initialState = { router: createMemoryHistory() };
const { apiMiddleware } = require("redux-api-middleware");

const configureStore = () => {
  const history = initialState.router;
  const store = createStore(
    combineReducers({
      router: connectRouter(history),
    }),
    initialState,
    compose(applyMiddleware(thunk, apiMiddleware))
  );

  return { history, store };
};

export default configureStore;
