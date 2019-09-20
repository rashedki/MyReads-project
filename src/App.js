import React, {Component} from 'react';
import Main from './Main';
import Search from './Search';
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Main/>
        <Search/>
      </div>
    )
  }
}

export default BooksApp
