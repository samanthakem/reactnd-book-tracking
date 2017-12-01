import React, { Component } from 'react'
import ShelfSelector from '../components/ShelfSelector'
import noCover from '../icons/no-cover-img.jpg'

class Book extends Component {
  render() {

    const { book, updateShelf } = this.props

    const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg}` }}></div>
          <ShelfSelector book={book} updateShelf={updateShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
      </div>
    )
  }
}

export default Book