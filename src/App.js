import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import * as BooksAPI from './util/BooksAPI'
import './App.css'
import NoMatch from './NoMatch'

import ListBooks from './components/ListBooks'
import Search from './components/Search'

class BooksApp extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then((response) => {
      newBook.shelf = newShelf
      var updatedBooks = this.state.books.filter( (oldBook) => oldBook.id !== newBook.id )
      updatedBooks.push(newBook)
      this.setState({ books: updatedBooks })
    })
  }

  render() {    
    return (
      <div className="app">
      <Switch>
        <Route exact path='/' render={() => (
          <ListBooks 
            books={this.state.books} 
            updateShelf={this.updateShelf} />
        )} />
        <Route path='/search' render={() => (
          <Search
            books={this.state.books}
            updateShelf={this.updateShelf} />
        )} />
        <Route component={NoMatch}/>
      </Switch>
      </div>
    )
  }
}

export default BooksApp
