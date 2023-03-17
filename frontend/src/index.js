import './index.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers/reducers";
import Header from "./views/main/Header.main";
import Sidebar from "./views/main/Sidebar.main";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}>
    <Header />
    <Sidebar />
    <App />
  </Provider>
);
