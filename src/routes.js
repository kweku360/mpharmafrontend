import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom"
import List from "./components/products/list"

const routes = () => {
    return (
        <Router>
            <Route path="/">
              <List/>
            </Route>
        </Router>
    )
}

export default routes;