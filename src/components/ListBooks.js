import React, { Component } from 'react'
import Bookshelf from '../components/Bookshelf'
import { Link } from 'react-router-dom';

class ListBooks extends Component {

  render() {

    const { books, updateShelf } = this.props

    const shelfs = [
      {
        title: "Currently Reading",
        type: "currentlyReading"
      },
      {
        title: "Want to Read",
        type: "wantToRead"
      },
      {
        title: "Read",
        type: "read"
      }
    ]
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelfs.map(
            (bookshelf, index) => 
              <div key={index}> 
                <Bookshelf 
                  title={bookshelf.title} 
                  books={books.filter((book) => book.shelf === bookshelf.type)}
                  updateShelf={updateShelf}
                /> 
              </div>
          )}
        </div>
        <div className='open-search'>
          <Link to='search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks