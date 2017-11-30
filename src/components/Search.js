import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../util/BooksAPI'
import Book from '../components/Book'

class Search extends Component {

  state = {
    query: '',
    books: [],
  }

  search = (query) => {
    if (query) {
      BooksAPI.search(query.trim()).then(response => {
        if (Array.isArray(response)) {
          let books = response.map((book) => {
            return this.syncShelf(book)
          })
          this.setState({ books })
        }
      })
    } else {
      this.setState({books: []});
    }
  }

  syncShelf = (book) => {
    const libraryBook = this.props.books.find((b) => b.id === book.id)
    book.shelf = libraryBook ? libraryBook.shelf : book.shelf = 'none'
    return book
  }

  updateQuery = (query) => {
    this.setState({ query });
    this.search(query);
  }

  componentDidMount() {
    this.search(this.state.query);
  }

  render() {

    const { query, books } = this.state
    const { updateShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => 
              <Book 
                key={book.id}
                updateShelf={updateShelf}
                book={book} 
              />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search