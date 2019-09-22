import React, {Component} from 'react';
import Books from './Books'
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
          <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
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
              this.state.searchBooks.map(searchBooks => (
              <li key={searchBooks.id}>
                <Books
                  book={searchBooks}
                  
                />
              </li>
            ))}

          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
