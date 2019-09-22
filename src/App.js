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
    })
  }

  moveShelf = (book,shelf) => {
    BooksAPI.update(book,shelf);

    BooksAPI.getAll().then((books) => {
      this.setState(() => ({books}))
    })
  }



  render() {
    return (
      <div className="app">
        {/*<Main
          listbooks={this.state.books}
          moveShelf={this.moveShelf}
          />*/}
        <Search
          moveShelf={this.moveShelf}
          />
      </div>
    )
  }
}

export default BooksApp;
