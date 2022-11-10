import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.min.css';
import Onepager from './components/Onepager'
import UsersList from './components/UsersList'
import './style.css';

export default function App() {
  return (
    <Router>
      <Switch>
          <Route path="/userslist">
            <UsersList />
          </Route>
          <Route path="/">
            <Onepager />
          </Route>
      </Switch> 
    </Router>
  );
}