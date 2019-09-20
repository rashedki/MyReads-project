import React, {Component} from 'react';
import Main from './Main';
import Search from './Search';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({books}))
    }
  )
  }
  render() {
        console.log(this.state.books);
    return (
      <div className="app">
        <Main
          listbooks={this.state.books}
          />
        <Search/>
      </div>
    )
  }
}

export default BooksApp;
