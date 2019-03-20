import React from "react"
import { BrowserRouter } from "react-router-dom"
import "babel-polyfill"
import { Provider } from "react-redux"
import "./globalStyles"
import { store } from "store/config"
import Router from "./Router"
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
)

export default App
