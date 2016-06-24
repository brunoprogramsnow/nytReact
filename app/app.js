import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search/search.js';

import { Router, Route, Link } from 'react-router';


// const Router = require('react-router').Router;
// const Route = require('react-router').Route;
// const Link = require('react-router').Link;

class Main extends React.Component {
  render(){
    return (
        <div className="main-container">
          <div className="row">
              <Search />
          </div>
        </div>
    );
  }
}

ReactDOM.render(
  <Main />, document.getElementById('app')

);