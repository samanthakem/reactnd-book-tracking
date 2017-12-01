import React, { Component } from 'react'
import Bookshelf from '../components/Bookshelf'
import { Link } from 'react-router-dom';

class ListBooks extends Component {

  render() {

    const { books, updateShelf } = this.props

    const shelfs = [
      {
        id: 0,
        title: "Currently Reading",
        type: "currentlyReading"
      },
      {
        id: 1,
        title: "Want to Read",
        type: "wantToRead"
      },
      {
        id: 2,
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
            (bookshelf) =>
              <div key={bookshelf.id}> 
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