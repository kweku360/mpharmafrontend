import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom"
import List from "./components/products/list"
import Add from "./components/products/add"
import Edit from "./components/products/edit"
import ListHistory from "./components/products/history";

const routes = () => {
    return (
        <Router>
            <Route path="/">
              <List/>
            </Route>
            <Route path="/add">
              <Add/>
            </Route>
            <Route path="/edit/:id">
              <Edit/>
            </Route>
            <Route path="/history/:id">
              <ListHistory/>
            </Route>
        </Router>
    )
}

export default routes;