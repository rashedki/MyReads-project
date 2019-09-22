import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Books from './Books';
import * as BooksAPI from './BooksAPI';

class Search extends Component{
  state = {
    query: '',
    searchBooks: []
  }

  updateQuery = (query) => {
	    this.setState(() => ({
	      query: query
	    }))
      this.updateSearchResult(query);
	  }
  updateSearchResult = (query) => {
    if (query){
      BooksAPI.search(query).then((searchBooks) => {
        if (searchBooks.error) {
          this.setState({searchBooks: []});
        } else {
        this.setState({searchBooks: searchBooks })
        }
      })
    } else {
      this.setState({searchBooks: []});
    }
  }

  render(){
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
              to="/"
              className="close-search"
          >
          Close
        </Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
  						onChange={(event) => this.updateQuery(event.target.value)}
              />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {
              this.state.searchBooks.map(searchBooks => {
                let shelf ="none";

                this.props.listbooks.map(book => (
                    book.id === searchBooks.id ?
                    shelf = book.shelf :
                    ''
                ))
                return(
              <li key={searchBooks.id}>
                <Books
                  book={searchBooks}
                  moveShelf={this.props.moveShelf}
                  shelfName={shelf}
                />
              </li>
            );
            })}

          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
