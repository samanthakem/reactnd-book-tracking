import React from 'react'
import Book from '../components/Book'

function Bookshelf(props) {
  const { books, title, updateShelf } = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title"> {title} </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) =>
            <li key={book.id}>
              <Book    
                updateShelf={updateShelf}
                book={book} /> 
            </li>
          )}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf